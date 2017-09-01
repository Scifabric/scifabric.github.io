<template>
    <b-modal :active.sync="modalactive">
        <div v-if="step === 1" class="step1">
                    <h2 class="title is-3 highlight has-text-primary">Hola! Nice to hear from you</h2>
                    <h2 class="subtitle is-6">Drop us a line at <a href="mailto:info@scifabric.com">info@scifabric.com</a> or fill in this form</h2>
                    <div class="has-text-left">
                        <b-field label="What it is first name?">
                            <b-input v-model="first_name"></b-input>
                        </b-field>
                        <b-field label="Your last name?">
                            <b-input v-model="last_name"></b-input>
                        </b-field>
                        <b-field label="And your email?">
                            <b-input type="email"
                                     value="john@"
                                     maxlength="30"
                                     v-model="email">
                            </b-input>
                        </b-field>
                        <b-field label="Drop us a line">
                            <b-input v-model="message" type="textarea"
                                                       minlength="10"
                                                       maxlength="100"
                                                       placeholder="">
                            </b-input>
                        </b-field>
                        <div class="field">
                            <b-checkbox v-model="subscribed">Keep me informed of scifabric’s news (no spam. We promise!)
                            </b-checkbox>
                        </div>
                    </div>
                    <p class="button is-medium is-primary">Send</p>
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
export default {
    props: ['modalactive'],
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            message: '', 
            subscribed: false,
            step: 1 
        }
              
    }
}
</script>
<style>
.modal-background {
    background-color: white;
}
.modal-close:before, .modal-close:after {
    background-color: black;
}
</style>
