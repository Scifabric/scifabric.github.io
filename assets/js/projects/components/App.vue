<template>
    <div class="">
        <div class="level">
            <span class="level-item title is-1 is-primary">What if we have a technology that can</span>
        </div>
        <div class="level">
            <span class="level-item title is-1 is-primary">help your
                <div class="is-expanded">
                    <span class="select is-fullwidth is-empty">
                        <select v-model="filter" class="options">
                            <option>all</option>
                            <option v-for="category in categories">{{category}}</option>
                        </select>
                    </span>
                </div>
                            projects?</span>
        </div>
        <div class="level">
            <div v-for="tag in tags" class="level-item">
                <span class="button is-primary is-small is-outlined">{{tag}}</span>
            </div>
        </div>
        <div class="columns is-multiline">
            <div v-for="(project, idx) of filteredProjects" class="column is-half">
                <div class="box notification" :class="projectColor(idx)">
                    <figure class="media-left">
                       <p class="image is-64x64">
                         <img src="http://bulma.io/images/placeholders/128x128.png">
                       </p>
                     </figure>
                     <p class="title is-3">{{project.title}}</p>
                     <div class="level">
                         <div class="level-left">
                           <div v-for="tag in project.tags" class="level-item">
                               <span class="button is-white is-small is-outlined" :disabled="isTag(tag)">{{tag}}</span>
                           </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import _ from 'lodash'

export default {
    data(){
        return {
            isImageModalActive: false,
            projects: window.projects,
            colors: ['primary', 'success', 'warning', 'info', 'danger' ],
            filters: {},
            filter: 'all',
        } 
    },
    methods:{
        isTag(tag){
            var t = _.find(this.filteredProjects, function(p){
                return _.find(p.tags, function(t){ return t === tag})
            })
            console.log("tag")
            console.log(t)
            return t
        },
        projectColor(idx){
            return "is-" + this.colors[idx % this.colors.length]
        },

    },
    computed: {
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
            return t
            },
        categories(){
            var t = []
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
</style>
