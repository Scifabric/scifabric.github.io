<template>
    <div class="container">
        <div class="columns">
            <div class="column is-1">
                <a @click="reset"><i class="fa fa-left-arrow"></i> All projects</a>
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
        }
    },
}
</script>
