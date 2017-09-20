<template>
    <b-modal :active.sync="showModal">
        <div v-if="step === 1" class="step1">
                    <h2 class="title is-3 highlight has-text-primary">Hola! Nice to hear from you</h2>
                    <h2 class="subtitle is-6">Drop us a line at <a href="mailto:info@scifabric.com">info@scifabric.com</a> or fill in this form</h2>
                    <section class="has-text-left">
                        <b-field>
                            <b-input type="hidden"></b-input>
                        </b-field>
                        <b-field label="What it is first name?">
                            <b-input v-model="formData.first_name" expanded></b-input>
                        </b-field>
                        <b-field label="Your last name?">
                            <b-input v-model="formData.last_name" expanded></b-input>
                        </b-field>
                        <b-field label="And your email?">
                            <b-input type="email"
                                     value="john@"
                                     maxlength="30"
                                     v-model="formData.email"
                                     :has-counter="false">
                            </b-input>
                        </b-field>
                        <b-field label="Drop us a line">
                            <b-input v-model="formData.message" type="textarea"
                                                       minlength="10"
                                                       maxlength="100"
                                                       placeholder="">
                            </b-input>
                        </b-field>
                        <b-field>
                            <b-checkbox v-model="formData.subscribe">Keep me informed of scifabric’s news (no spam. We promise!)
                            </b-checkbox>
                        </b-field>
                    </section>
                    <p @click="sendMail" class="button is-medium is-primary">Send</p>
                    <!--<p class="title is-6 has-text-primary">Scifabric is Madrid and London based</p>-->
        </div>
        <div v-else class="step2">
            <div class="columns is-centered">
                <div class="column is-8">
                    <h2>Your message is on its way!</h2>
                    <p>We’ll email back to you very soon. </p>
                    <p>Thanks for contact us :)</p>
                    <img class="responsive" src="/assets/img/nick-happy.svg">
                    <button class="button is-primary">Got it!</button>
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
	methods: {
		sendMail(){
			axios.defaults.withCredentials = true
			axios.defaults.crossDomain = true
        	//var url = "https://formchimp.scifabric.com/register"
        	var url = "http://localhost:5000/register"
            var self = this
			axios.get(url)
				.then(response => {
					console.log(response.data)	
					var csrftoken = response.data['csrf_token']
					axios.post(url, self.formData, 
							   {headers: {'X-CSRFToken': csrftoken, 'Content-Type': 'application/x-www-form-urlencoded'}})
						.then(response => {
								console.log("Done!")
								//self.step = 2
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
