<template>
    <div>
        <Contact :modalactive.sync="modalactive" :subject="subject"></Contact>
        <a @click.stop="toggleContact('[CONTACT]')" href="#" :class="bclass">{{title}}</a>
    </div>
</template>
<script>
import Contact from '../../pricing/components/contact.vue'

export default {
    components: {
        Contact
    },
    props: ['title', 'bclass'],
    data(){
        return {
            modalactive: false,
            subject: '[CONTACT]'
        }
    },
    methods: {
        toggleContact(subject) {
            this.modalactive = !this.modalactive
            this.subject = subject
        }
    },
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
