<template>
    <div class="container">
        <div v-if="selectedProject">
            <Project :project.sync="selectedProject"></Project>
        </div>
        <div v-else class="columns is-multiline is-centered">
            <div class="column is-9">
                <span class="level-item title is-1 has-text-primary highlight first-title is-hidden-touch">What if we have a technology that can</span>
                <span class="title is-1 has-text-primary highlight first-title is-hidden-tablet is-hidden-desktop is-hidden-fullhd">What if we have a technology that can help your</span>
            </div>
            <div class="column is-9">
                <span class="level-item title is-1 has-text-primary is-hidden-touch" style="font-weight: 400;">help your
                    <div class="wrapper-dropdown level" tabindex="1" :class="{active: showOptions}" @click="toggleOptions">
                        {{filter}} <i class="material-icons has-size-1">keyboard_arrow_down</i>
                        <ul class="dropdown-special">
                            <li v-for="category in categories" class="is-capitalized" @click="selectOption(category)">
                                {{category}}
                                <p v-if="category === 'glam'" style="font-size:14px; margin-top:10px;">Galeries, Libraries, Archives and Museums</p>
                            </li>
                        </ul>
                    </div>
                projects?</span>
                <span class="title is-1 has-text-primary is-hidden-tablet is-hidden-desktop is-hidden-fullhd" style="font-weight: 400;">
                <div class="wrapper-dropdown is-marginless level" tabindex="1" :class="{active: showOptions}" @click="toggleOptions">
                    {{filter}} <i class="material-icons">keyboard_arrow_down</i>
                    <ul class="dropdown-special">
                        <li v-for="category in categories" class="is-capitalized" @click="selectOption(category)">
                            {{category}}
                            <p v-if="category === 'glam'" style="font-size:14px; margin-top:10px;">Galeries, Libraries, Archives and Museums</p>
                        </li>
                    </ul>
                </div>

                projects?</span>
            </div>
            <div class="column is-8">
                <div class="tags">
                        <span v-for="tag in tags" v-if="tag.disabled" class="button is-primary is-small is-outlined tag" disabled>{{tag.tag}}</span>
                        <span v-else class="button is-primary is-small is-outlined tag">{{tag.tag}}</span>
                </div>
            </div>
            <div v-for="(project, idx) of filteredProjects" class="column is-half">
                <div class="box notification projectbox" :class="projectColor(idx)" @click="select(project)" style="display:flex; flex-direction: column; justify-content: space-between;">
                    <figure class="media-left">
                       <p class="image">
                         <img :src="cover(project.cover)" style="max-width:210px; max-height:130px; width:auto;">
                       </p>
                     </figure>
                     <p class="title is-3 has-text-white is-marginless">{{project.title}}</p>
                     <div class="tags" style="margin-top:15px;">
                         <span v-for="tag in project.tags" class="button is-white is-small is-outlined tag">{{tag}}</span>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Project from '../components/Project.vue'
import _ from 'lodash'

export default {
    components: {Project},
    props: ['visibility'],
    data(){
        return {
            isImageModalActive: false,
            projects: window.projects,
            colors: ['primary', 'info', 'warning', 'danger' ],
            filters: {},
            filter: 'all',
            selectedProject: null,
            options: false,
        } 
    },
    methods:{
        cover(logo){
            return "/assets/img/" + logo
        },
        selectOption(option){
            this.filter = option
        },
        toggleOptions(){
            this.options = !this.options
        },
        select(project){
            this.selectedProject = project
            window.location.hash = encodeURI(project.project.toLowerCase())
        },
        isTag(tag){
            var t = _.find(this.filteredProjects, function(p){
                return _.find(p.tags, function(t){ return t === tag})
            })
            return t
        },
        projectColor(idx){
            return "is-" + this.colors[idx % this.colors.length]
        },

    },
    watch: {
        visibility: function(newVal){
            this.selectedProject = _.find(this.projects, function(p){
                return p.project.toLowerCase() === newVal
            })
            //_.find(this.projects, function(p) {})
        },
        filteredProjects: function(newVal) {
            for(let tag of this.tags) {
                let name = tag.tag
                let found = _.find(this.filteredTags, {tag:name})
                if ( found === undefined) {
                    tag.disabled = true
                }
                else {
                    tag.disabled = false
                }
            }
        },
        selectedProject: function(newVal) {
            if (newVal !== null) {
                window.scrollTo(0,0)
            }
            else {
                window.location.hash = ''
            }
        }
    },
    computed: {
        showOptions(){
            return this.options
        },
        filteredProjects(){
            if (this.filter === 'all') {
                return this.projects
            }
            else {
                return _.filter(this.projects, ['category', this.filter])
            }
        },
        tags() {
            var t = []
            for (var item of this.projects) {
                for (var tag of item.tags) {
                    t.push(tag)
                }
            }
            t = _.uniq(t)
            var tgs = []
            for (let tmp of t) {
                tgs.push({tag: tmp, disabled: false})
            }
            return tgs
            },
        filteredTags() {
            var t = []
            for (var item of this.filteredProjects) {
                for (var tag of item.tags) {
                    t.push(tag)
                }
            }
            t = _.uniq(t)
            var tgs = []
            for (let tmp of t) {
                tgs.push({tag: tmp, disabled: false})
            }
            return tgs
            },

        categories(){
            var t = ['all']
            for (var item of this.projects) {
                if (item.category !== undefined) {
                    t.push(item.category)
                }
            }
            t = _.uniq(t)
            return t
            }

    }
}
</script>
<style lang="scss">
@import "../../../../_sass/_scifabric.scss";
@import "~buefy/src/scss/buefy";

.options {
    border: 0px !important;
    box-shadow: inset 0 -2px 0 0 $green !important;
    border-radius: 5px !important;
    color: $green !important;
}

.select:not(.is-multiple)::after {
    border-color: $green !important;
    border-width: 3px !important;
}

.first-title {
    /* margin-bottom: -53px;
    z-index: 1; */
}

.wrapper-dropdown {
    position: relative;
    min-width: 330px;
    max-width: 350px;
    margin: 0 10px;
    outline: none;
    cursor: pointer;
    border: 0px !important;
    box-shadow: inset 0 -2px 0 0 $green !important;
    border-radius: 5px !important;
    color: $green !important;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;

}

.dropdown-special {
    position: absolute;
    top: 100%;
    left: -5px;
    right: 0px;
    background: white;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    list-style: none;
    opacity: 0;
    pointer-events: none;
    padding-left: 27px;
    padding-right: 27px;
    padding-bottom: 30px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);

}

.wrapper-dropdown.active .dropdown-special {
    opacity: 1;
    pointer-events: auto;
    z-index: 2;
}

.wrapper-dropdown .dropdown-special {
    position: absolute;
    top: 100%;
    left: -5px;
    right: 0px;
    background: white;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    list-style: none;
    opacity: 0;
    pointer-events: none;
}

.wrapper-dropdown .dropdown-special li:nth-child(1) a {
    border-left-color: #00ACED;
}

.wrapper-dropdown .dropdown-special li {
    display: block;
    text-decoration: none;
    color: $primary;
    border-left: 3px solid $primary;
    padding: 10px;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    margin-top: 20px;
}

.projectbox {
	min-height: 355px;
    cursor: pointer;
}
</style>
