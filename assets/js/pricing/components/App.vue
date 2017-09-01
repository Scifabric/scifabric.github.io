<template>
    <div class="container has-text-centered">
        <h1 class="title is-1 has-text-primary highlight">Pricing Plans</h1>
        <h2 class="subtitle is-2 has-text-primary">We'll tailor a plan to suit your needs</h2>
        <div class="columns is-centered">
            <div class="column"></div>
            <div class="column ">
                <div class="notification is-info-subtle has-text-centered">
                    <h3 class="title is-3 has-text-primary">Starter</h3>
                    <h4 class="subtitle is-4 has-text-primary">Get basic support and fly solo!</h4>
                    <p class="highlight">250€/month</p>
                    <a href="#" class="button is-primary">Contact us</a>
                </div>
            </div>
            <div class="column">
                <div class="notification is-info has-text-centered">
                    <h3 class="title is-3 has-text-white">Pro</h3>
                    <h4 class="subtitle is-4 has-text-white">Get basic support and fly solo!</h4>
                    <p class="highlight">Custom price</p>
                    <a href="#" class="button is-white">Contact us</a>
                </div>
            </div>
        </div>
        <div class="columns is-centered" style="margin-top:3px;">
            <div class="column">
                <div class="notification has-text-left features">
                    <p>Support</p>
                    <p>Project customization</p>
                    <p>Stats</p>
                    <p>Real time Data analysis</p>
                    <p>Text search</p>
                    <p>Project wizard</p>
                    <p>Resources</p>
                    <p>Data Privacy</p>
                    <p>Third-party integrations</p>
                    <p>Number of projects</p>
                    <p>Theme Customization</p>
                    <p>Weekly Email Stats</p>
                    <p>Workflows</p>
                    <p>Export data integrations</p>
                    <p>Social Login</p>
                    <p>Plugin support</p>
                    <p>HTTPS</p>
                    <p>Auto Importers</p>
                    <p>Web Push Notifications</p>
                    <p>Revision History</p>
                    <p>Hosting on your own servers</p>
                    <p>UX/UI</p>
                </div>
            </div>
            <div class="column">
                <div class="notification is-info-subtle has-text-centered features">
                    <p>Email within 72h</p>
                    <p>Basic (color & logo)</p>
                    <p>15-day stats retention</p>
                    <p><i class="material-icons">clear</i></p>
                    <p><i class="material-icons">clear</i></p>
                    <p><i class="material-icons">clear</i></p>
                    <p>Shared</p>
                    <p>Public</p>
                    <p>Yes (1, your choice)</p>
                    <p>1</p>
                    <p>Basic</p>
                    <p>Basic</p>
                    <p><i class="material-icons">done</i></p>
                    <p><i class="material-icons">clear</i></p>
                    <p><i class="material-icons">clear</i></p>
                    <p><i class="material-icons">clear</i></p>
                    <p><i class="material-icons">clear</i></p>
                    <p><i class="material-icons">clear</i></p>
                    <p><i class="material-icons">clear</i></p>
                    <p><i class="material-icons">clear</i></p>
                    <p><i class="material-icons">clear</i></p>
                    <p>Optional</p>
                </div>
            </div>
            <div class="column ">
                <div class="notification is-info has-text-centered features">
                    <p>SLAs within 24h</p>
                    <p>Full (custom server and look & feel)</p>
                    <p>Full time stats</p>
                    <p><i class="material-icons">done</i></p>
                    <p><i class="material-icons">done</i></p>
                    <p>No coding</p>
                    <p>Dedicated / SLA </p>
                    <p>Private</p>
                    <p>Yes (all)</p>
                    <p>SLA / According to needs</p>
                    <p>Full</p>
                    <p>Pro</p>
                    <p><i class="material-icons">done</i></p>
                    <p><i class="material-icons">done</i></p>
                    <p><i class="material-icons">done</i></p>
                    <p><i class="material-icons">done</i></p>
                    <p><i class="material-icons">done</i></p>
                    <p><i class="material-icons">done</i></p>
                    <p><i class="material-icons">done</i></p>
                    <p><i class="material-icons">done</i></p>
                    <p><i class="material-icons">done</i></p>
                    <p>Optional</p>
                </div>
            </div>
        </div>
        <div class="columns is-centered">
            <div class="column is-8">
                <h2 class="title is-2 has-text-primary highlight">Support Solutions</h2>
                <p class="subtitle is-3 has-text-primary">If you are using PYBOSSA on your own we offer extra support just in case something breaks.</p>
                <p class="content">Not sure what’s happening and why something is not working properly? Rise a Support ticket in order to give you a solution. We’ll spend a minimum of 2h work. We will get back to you within 72h via mail with a solution and instructions so you can fix it yourself.  If you need development help for the implementation of a given solution, we also offer the resources you need. We’ll give you a a timing and price quote acording to your problem.</p>
                <p class="title is-5 has-text-primary highlight">100€ / Support Ticket for non customers</p>
                <p class="title is-5 has-text-primary highlight">SLA for customers</p>
                <span class="button is-info" data-plan="ticket">Raise a support Ticket</span>
            </div>
        </div>
        <div class="columns is-centered">
            <div class="column is-8">
                <h2 class="title is-2 has-text-primary highlight">FAQs</h2>
                <b-panel :collapsible="true" :open.sync="faq1" class="has-text-left" :class="{'custom-panel-open': faq1, 'custom-panel': !faq1}">
                    <span class="title is-6 highlight has-text-left" :class="{'has-text-primary': faq1, 'has-text-success': !faq1}" slot="header">Is PYBOSSA free?</span>
                    <div class="content">
                        <p class="has-text-left">
                            It is, indeed, open-source. That means you can use it freely. BUT if you’re looking to create a project that is unique and has the best features in town, Scifabric will add a great value to it, allowing you to achieve things that you cannot get with PYBOSSA only. That is our secret weapon. In any case, be our guest.
                        </p>
                    </div>
                </b-panel>
                <b-panel :collapsible="true" :open.sync="faq2" class="has-text-left" :class="{'custom-panel-open': faq2, 'custom-panel': !faq2}">
                    <span class="title is-6 highlight has-text-left" :class="{'has-text-primary': faq2, 'has-text-success': !faq2}" slot="header">Can I have In-House Training?</span>
                    <div class="content">
                        <p class="has-text-left">We do offer In-House Training! We bring expert instruction to use PYBOSSA technology and to full manage your Crowdsourcing projects like a pro starting at 3000E / course.</p>
                    </div>
                </b-panel>
                <b-panel :collapsible="true" :open.sync="faq3" class="has-text-left" :class="{'custom-panel-open': faq3, 'custom-panel': !faq3}">
                    <span sclass="title is-6 highligh thas-text-left"  :class="{'has-text-primary': faq3, 'has-text-success': !faq3}" slot="header">Is the whole UX/UI Design Included?</span>
                    <div class="content">
                        <p class="has-text-left">Not by default, but we offer UX/UI Design services. That can be included on your SLA. OPTIONAL.
                        For our PRO clients, we also offer UX/UI Design (including text and copy) and full development of templates, APIs and other requirements your project may have. Because we want your project to kick-ass!
                        <strong class="btn-getintouch">Please, get in touch</strong> so we can discuss your needs and get to fully understand your project. Besides, we’d love to hear from you!</p>

                    </div>
                </b-panel>
                <b-panel :collapsible="true" :open.sync="faq4" class="has-text-left" :class="{'custom-panel-open': faq4, 'custom-panel': !faq4}">
                    <span class="title is-6 highlight has-text-left"  :class="{'has-text-primary': faq4, 'has-text-success': !faq4}" slot="header">What are the integrations?</span>
                    <div class="content">
                        <p class="has-text-left">Your project can have AMAZON S3, FLICKER, Dropbox, Twitter, Mailchimp, Youtube, Google Spreadsheets, and more, integrated. You can choose one if you’re going BASIC or you will get them all if you’re going PRO. </p>
                    </div>
                </b-panel>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            faq1: false,
            faq2: false,
            faq3: false,
            faq4: false,
        }
    },
    computed: {
        open() {
            return this.open
        }
    }
}
</script>
<style lang="scss">
@import "../../../../_sass/_scifabric.scss";
@import "~buefy/src/scss/buefy";
.is-info-subtle {
    background-color:rgb(224, 236, 241);
}

.material-icons {
    font-size: 18px;
}

.custom-panel > .panel-heading {
    background: rgba(0, 211, 167, 0.15) ;
}

.custom-panel-open > .panel-heading {
    background: white;
    color: $primary;
}

.question {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    max-height: 70px;
    overflow: hidden;
    border: 1px solid rgba(150,202,217,0.27);
    width: 100%;
    align-items: center;
    transition: all 0.5s
}

.question:hover {
    background: rgba(150,202,217,0.27)
}

.question .question-container {
    display: flex;
    flex-direction: column;
    width: 40%
}

.question .question-container .question-title {
    color: #3bb0d4;
    font-size: 19px;
    font-weight: bold;
    height: 70px;
    display: flex;
    align-items: center
}

.question .question-container .answer {
    display: none;
    background: transparent
}

.question .question-container .answer p {
    background: transparent;
    font-size: 18px
}

.question .question-container .show {
    display: block
}

.expanded {
    max-height: none;
    background: white
}

</style>
