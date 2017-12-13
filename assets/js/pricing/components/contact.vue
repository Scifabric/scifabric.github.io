<template>
    <b-modal :active.sync="showModal">
        <div v-if="step === 1" class="step1">
                    <h2 class="title is-3 highlight has-text-primary">Hola! Nice to hear from you!</h2>
                    <h2 class="subtitle is-6">Drop us a line at <a href="mailto:info@scifabric.com">info@scifabric.com</a> or fill in this form</h2>
                    <section class="has-text-left">
                        <b-field>
                            <b-input type="hidden"></b-input>
                        </b-field>
                        <b-field label="What is your name?">
                            <b-input :placeholder="John" v-model="formData.first_name" ref="firstName" minlength=2></b-input>
                        </b-field>
                        <b-field label="And your last name?">
                            <b-input :placeholder="Doe" v-model="formData.last_name" ref="lastName" minlength=2></b-input>
                        </b-field>
                        <b-field label="At what email should we contact you?">
                            <b-input type="email"
                                     v-model="formData.email"
                                     placeholder="myawesome@email.com"
                                     has-counter="false" ref="email">
                            </b-input>
                        </b-field>
                        <b-field label="So, how can we help you?">
                            <b-input v-model="formData.message" type="textarea"
                                                       minlength="10"
                                                       maxlength="100"
                                                       placeholder="Tell us"
                                                       ref="message">
                            </b-input>
                        </b-field>
                        <b-field>
                            <b-checkbox v-model="formData.subscribe">Keep me informed of scifabric’s news (no spam. We promise!)
                            </b-checkbox>
                        </b-field>
                    </section>
                    <p v-if="formValid" @click="sendMail" class="button is-medium is-primary">Send</p>
                    <p v-else class="button is-medium is-primary" disabled>Send</p>
                    <!--<p class="title is-6 has-text-primary">Scifabric is Madrid and London based</p>-->
        </div>
        <div v-else class="step2">
            <div class="columns is-centered">
                <div class="column is-8">
                    <h2 class="title">Message received</h2>
                    <p>Thanks for writing to us. We promise to get back to you within 24/48 hours, but please allow a little more time if it’s not working days. 
</p>
                    <p>We’re looking forward to speaking with you!</p>
                    <p><img src="/assets/img/nick-happy.svg" style="max-height:none;"></p>
                    <p><button @click="closeModal" class="button is-primary">Done</button></p>
                </div>
            </div>
        </div>
    </b-modal>
</template>
<script>
import axios from 'axios';
import $ from 'jquery';
export default {
    props: ['modalactive', 'subject'],
    data() {
        return {
			formData: {
            	first_name: '',
            	last_name: '',
            	email: '',
            	message: '', 
            	subscribe: false,
				subject: this.subject,
			},
            step: 1,
            showModal: this.modalactive
        }
              
    },
    computed:{
        formValid(){
            if ((this.formData.first_name !== '' && 
                 this.formData.last_name !== '' &&
                 this.formData.email !== '' &&
                 this.formData.message !== '') &&
                (this.$refs.firstName.checkHtml5Validity() &&
                this.$refs.lastName.checkHtml5Validity() &&
                this.$refs.email.checkHtml5Validity() &&
                this.$refs.message.checkHtml5Validity())){
                return true
            }
            else {
                return false
            }
        }
    },
	methods: {
        closeModal(){
            this.showModal = false
            this.step = 1
        },
        formDataObj(){
            var tmp = new FormData()
            tmp.append('first_name', this.formData.first_name)
            tmp.append('last_name', this.formData.last_name)
            tmp.append('email', this.formData.email)
            tmp.append('message', this.formData.message)
            tmp.append('subscribe', this.formData.subscribe)
            tmp.append('subject', this.formData.subject)
            return tmp
        },
		sendMail(){
            console.log(this.formValid)
			axios.defaults.withCredentials = true
			axios.defaults.crossDomain = true
        	var url = "https://formchimp.scifabric.com/register"
        	//var url = "http://localhost:5000/register"
            var self = this
            var myData = this.formDataObj()
			axios.get(url)
				.then(response => {
					//console.log(response.data)	
					var csrftoken = response.data['csrf_token']
					//axios.post(url, self.formData, 
					axios.post(url, myData, 
							   {headers: {'X-CSRFToken': csrftoken,
                                          'Content-Type': 'application/x-www-form-urlencoded'}})
						.then(response => {
								console.log("Done!")
								self.step = 2
						})
					    .catch(error => {console.log(error)})
				})
			    .catch(error => {console.log(error)})	
			}
	},
    watch: {
        modalactive: function(newVal) {
            this.showModal = newVal
            this.$emit('update:modalactive', newVal)
        },
        showModal: function(newVal) {
            this.showModal = newVal
            this.$emit('update:modalactive', newVal)
        }
    }
}
</script>
<style>
.step1, .step2 {
    overflow: hidden;
}
.modal-background {
    background-color: white;
}
.modal-close:before, .modal-close:after {
    background-color: black;
}
</style>
