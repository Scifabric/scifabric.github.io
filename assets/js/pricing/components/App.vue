<template>
  <div class="container has-text-centered">
    <Contact :modalactive.sync="modalactive" :subject="subject"></Contact>
    <h1 class="title is-1 has-text-primary highlight">Pricing Plans</h1>
    <h2 class="subtitle is-2 has-text-primary">
      We'll tailor a plan to suit your needs
    </h2>
    <div class="columns is-centered">
      <div class="column"></div>
      <div class="column is-hidden-touch">
        <div class="notification is-info-subtle has-text-centered">
          <h3 class="title is-3 has-text-primary">Starter</h3>
          <h4 class="subtitle is-4 has-text-primary">
            Get basic support and fly solo!
          </h4>
          <p class="highlight">350€/month</p>
          <a
            @click.stop="toggleContact('[PRICING]')"
            href="#"
            class="button is-primary"
            >Contact us</a
          >
        </div>
      </div>
      <div class="column is-hidden-touch">
        <div class="notification is-info has-text-centered">
          <h3 class="title is-3 has-text-white">Pro</h3>
          <h4 class="subtitle is-4 has-text-white">
            Your project is unique.<br />We'll build it
          </h4>
          <p class="highlight">Custom price</p>
          <a
            @click.stop="toggleContact('[PRICING]')"
            href="#"
            class="button is-white"
            >Contact us</a
          >
        </div>
      </div>
    </div>
    <div class="columns is-centered" style="margin-top: 3px">
      <div class="column is-hidden-touch">
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
          <div class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd">
            <h3 class="title is-3 has-text-primary">Starter</h3>
            <h4 class="subtitle is-4 has-text-primary">
              Get basic support and fly solo!
            </h4>
            <p class="highlight">350€/month</p>
            <a
              @click.stop="toggleContact('[PRICING]')"
              href="#"
              class="button is-primary"
              >Contact us</a
            >
          </div>

          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Support
          </p>
          <p>Email within 72h</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Project Customization
          </p>
          <p>Basic (color & logo)</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Stats
          </p>
          <p>15-day stats retention</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Real time data analysis
          </p>
          <p><i class="material-icons">clear</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Text search
          </p>
          <p><i class="material-icons">clear</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Project Wizard
          </p>
          <p><i class="material-icons">clear</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Resources
          </p>
          <p>Shared</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Data Privacy
          </p>
          <p>Public</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Third-party integrations
          </p>
          <p>Yes (1, your choice)</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Number of projects
          </p>
          <p>1</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Theme customization
          </p>
          <p>Basic</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Weekly email stats
          </p>
          <p>Basic</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Workflows
          </p>
          <p><i class="material-icons">done</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Export data integrations
          </p>
          <p><i class="material-icons">clear</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Social Login
          </p>
          <p><i class="material-icons">clear</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Plugin support
          </p>
          <p><i class="material-icons">clear</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            HTTPS
          </p>
          <p><i class="material-icons">clear</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Auto Importers
          </p>
          <p><i class="material-icons">clear</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Web push Notifications
          </p>
          <p><i class="material-icons">clear</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Revision history
          </p>
          <p><i class="material-icons">clear</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Hosting on your own servers
          </p>
          <p><i class="material-icons">clear</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            UX/UI
          </p>
          <p>Optional</p>
        </div>
      </div>
      <div class="column">
        <div class="notification is-info has-text-centered features">
          <div class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd">
            <h3 class="title is-3 has-text-white">Pro</h3>
            <h4 class="subtitle is-4 has-text-white">
              Your project is unique.<br />We'll build it.
            </h4>
            <p class="highlight">Custom price</p>
            <a
              @click.stop="toggleContact('[PRICING]')"
              href="#"
              class="button is-white"
              >Contact us</a
            >
          </div>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Support
          </p>
          <p>SLAs within 24h</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Project Customization
          </p>
          <p>Full (custom server and look & feel)</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Stats
          </p>
          <p>Full time stats</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Real time data analysis
          </p>
          <p><i class="material-icons">done</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Text search
          </p>
          <p><i class="material-icons">done</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Project Wizard
          </p>
          <p>No coding</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Resources
          </p>
          <p>Dedicated / SLA</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Data Privacy
          </p>
          <p>Private</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Third-party integrations
          </p>
          <p>Yes (all)</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Number of projects
          </p>
          <p>SLA / According to needs</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Theme customization
          </p>
          <p>Full</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Weekly email stats
          </p>
          <p>Pro</p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Workflows
          </p>
          <p><i class="material-icons">done</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Export data integrations
          </p>
          <p><i class="material-icons">done</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Social Login
          </p>
          <p><i class="material-icons">done</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Plugin support
          </p>
          <p><i class="material-icons">done</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            HTTPS
          </p>
          <p><i class="material-icons">done</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Auto Importers
          </p>
          <p><i class="material-icons">done</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Web push Notifications
          </p>
          <p><i class="material-icons">done</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Revision history
          </p>
          <p><i class="material-icons">done</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            Hosting on your own servers
          </p>
          <p><i class="material-icons">done</i></p>
          <p
            class="is-hidden-tablet is-hidden-desktop is-hidden-fullhd title is-6 is-marginless"
          >
            UX/UI
          </p>
          <p>Optional</p>
        </div>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-8">
        <h2 class="title is-2 has-text-primary highlight">Support Solutions</h2>
        <p class="subtitle is-3 has-text-primary">
          If you are using PYBOSSA on your own we offer extra support just in
          case something breaks.
        </p>
        <p class="content">
          Not sure what is happening and why something is not working properly?
          Raise a Support Ticket in order to give you a solution. We’ll spend a
          minimum of 2h work, and we will get back to you within 72h via email
          with a solution and instructions so that YOU can fix it. If you need
          development help for the implementation of a given solution, we also
          offer the resources that you may need. We will give you a quote as
          well as timings according to your issue.
        </p>
        <p class="title is-5 has-text-primary highlight">
          100€ / Support Ticket for non customers
        </p>
        <p class="title is-5 has-text-primary highlight">SLA for customers</p>
        <span
          class="button is-info"
          data-plan="ticket"
          @click.stop="toggleContact('[SUPPORT TICKET]')"
          >Raise a support Ticket</span
        >
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-8">
        <h2 class="title is-2 has-text-primary highlight">FAQs</h2>
        <b-panel
          :collapsible="true"
          :open.sync="faq1"
          class="has-text-left"
          :class="{ 'custom-panel-open': faq1, 'custom-panel': !faq1 }"
        >
          <span
            class="title is-6 highlight has-text-left"
            :class="{ 'has-text-primary': faq1, 'has-text-success': !faq1 }"
            slot="header"
            >Is PYBOSSA free?</span
          >
          <div class="content">
            <p class="has-text-left">
              It is indeed as its an open-source technology. That means that you
              can use it freely. However, if you’re looking to create a unique
              project that has the best features in town, look no further from
              Scifabric we will add greater value to your project helping you
              achieve what you cannot obtain with PYBOSSA only. That´s our
              secret weapon.
            </p>
          </div>
        </b-panel>
        <b-panel
          :collapsible="true"
          :open.sync="faq2"
          class="has-text-left"
          :class="{ 'custom-panel-open': faq2, 'custom-panel': !faq2 }"
        >
          <span
            class="title is-6 highlight has-text-left"
            :class="{ 'has-text-primary': faq2, 'has-text-success': !faq2 }"
            slot="header"
            >Can I have In-House Training?</span
          >
          <div class="content">
            <p class="has-text-left">
              Yes, we do offer In-House Training! You will be instructed by an
              expert in the use of our PYBOSSA technology so that you can fully
              manage your own crodwsourcing project like a pro for as little as
              3000€/course.
            </p>
          </div>
        </b-panel>
        <b-panel
          :collapsible="true"
          :open.sync="faq3"
          class="has-text-left"
          :class="{ 'custom-panel-open': faq3, 'custom-panel': !faq3 }"
        >
          <span
            class="title is-6 highligh thas-text-left"
            :class="{ 'has-text-primary': faq3, 'has-text-success': !faq3 }"
            slot="header"
            >Is the whole UX/UI Design Included?</span
          >
          <div class="content">
            <p class="has-text-left">
              Not by default, but we do offer UX/UI Design services for all our
              clients that can be included in the project contract. For our PRO
              clients we also offer UX/UI Design and full development of
              templates, APIs and other requirements that the project may have.
              So do get in touch to discuss your project and needs. We would
              love to hear from you!
            </p>
          </div>
        </b-panel>
        <b-panel
          :collapsible="true"
          :open.sync="faq4"
          class="has-text-left"
          :class="{ 'custom-panel-open': faq4, 'custom-panel': !faq4 }"
        >
          <span
            class="title is-6 highlight has-text-left"
            :class="{ 'has-text-primary': faq4, 'has-text-success': !faq4 }"
            slot="header"
            >What are the integrations?</span
          >
          <div class="content">
            <p class="has-text-left">
              Your project can integrate AMAZON S3, FLICKER, Dropbox, Twitter,
              Mailchimp, Youtube, Google Spreadsheets, and many more. You can
              choose one if you are going BASIC or you will get them all if you
              opt for PRO.
            </p>
          </div>
        </b-panel>
      </div>
    </div>
  </div>
</template>
<script>
import Contact from "../components/contact.vue";

export default {
  components: {
    Contact,
  },
  data() {
    return {
      subject: "[CONTACT]",
      modalactive: false,
      faq1: false,
      faq2: false,
      faq3: false,
      faq4: false,
    };
  },
  methods: {
    toggleContact(subject) {
      this.modalactive = !this.modalactive;
      this.subject = subject;
    },
  },
};
</script>
<style lang="scss">
@import "../../../../_sass/_scifabric.scss";
@import "~buefy/src/scss/buefy";
.is-info-subtle {
  background-color: rgb(224, 236, 241);
}

.material-icons {
  font-size: 18px;
}

.custom-panel > .panel-heading {
  background: rgba(0, 211, 167, 0.15);
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
  border: 1px solid rgba(150, 202, 217, 0.27);
  width: 100%;
  align-items: center;
  transition: all 0.5s;
}

.question:hover {
  background: rgba(150, 202, 217, 0.27);
}

.question .question-container {
  display: flex;
  flex-direction: column;
  width: 40%;
}

.question .question-container .question-title {
  color: #3bb0d4;
  font-size: 19px;
  font-weight: bold;
  height: 70px;
  display: flex;
  align-items: center;
}

.question .question-container .answer {
  display: none;
  background: transparent;
}

.question .question-container .answer p {
  background: transparent;
  font-size: 18px;
}

.question .question-container .show {
  display: block;
}

.expanded {
  max-height: none;
  background: white;
}

.is-hidden-tablet.is-hidden-desktop.is-hidden-fullhd.title.is-6.is-marginless {
  padding-top: 10px;
}
</style>
