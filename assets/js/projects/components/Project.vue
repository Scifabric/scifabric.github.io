<template>
    <div class="container" style="margin-bottom:160px;">
        <div class="columns">
            <div class="column is-offset-2 is-2">
                <a @click="reset"><i style="font-size:10px;" class="material-icons">arrow_back</i> All projects</a>
            </div>
        </div>
        <div class="columns">
            <div class="column is-offset-2 is-6 ">
                <h1 class="title is-1 is-primary highlight is-capitalized">{{project.title}}</h1>
                <div class="level">
                    <div class="level-left">
                        <span v-for="tag of project.tags" class="button is-primary is-small is-outlined is-capitalized " style="margin-right:5px;">{{tag}}</span>
                    </div>
                </div>
                <h2 class="title is-2 is-primary highlight">Starting point</h2>
                <div class="content">
                    {{project.starting_point}}
                </div>
                <h2 class="title is-2 is-primary highlight">What we did!</h2>
                <div class="content">
                    {{project.what_we_did}}
                </div>
                <h2 class="title is-2 is-primary highlight">How does it work!</h2>
                <div class="content">
                    {{project.how_does_it_work}}
                </div>
            </div>
            <div class="column is-4">
                <div class="columns">
                    <div class="column" style="max-width:70px;">
                        <img :src="logo(project.client_logo)"/>
                    </div>
                    <div class="column">
                        <h3 class="title is-4 is-primary highlight">{{project.project}}</h3>
                        <h3 class="subtitle is-6">{{project.client}} <br/> {{project.location}}</h3>
                    </div>
                </div>
                <div class="columns">
                    <div class="column has-text-primary is-size-5">
                        <p><img class="quote" src="/assets/img/quote.svg"> 
                            {{project.quote}}</p>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-3">
                        <img :src="portrait(project.person)" class="portrait"/>
                    </div>
                    <div class="column">
                        <p class="title is-7 highlight is-capitalized">{{project.person_name}}</p>
                        <p class="subtitle is-7 is-capitalized">{{project.person_position}}</p>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <h3 class="title is-3 is-primary highlight">Want to read more?</h3>
                        <p v-for="link in project.links">
                            <a :href="link.link" class="has-text-info is-capitalized">{{link.title}}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column is-2 is-offset-2">
                <a @click="reset"><i style="font-size:10px;" class="material-icons">arrow_back</i> All projects</a>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {foo: false}
    },
    props: ['project'],
    methods:{
        reset() {
          this.$emit('update:project', null)
        },
        portrait(person) {
            return "/assets/img/portrait-quotes/" + person
        },
        logo(logo) {
            return "/assets/img/" + logo
        }

    },
}
</script>
<style>
.portrait {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
.quotesymbol::first-letter {
  font-weight: bold;
  color: red;
}
</style>
