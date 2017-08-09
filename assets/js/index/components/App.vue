<template>
    <div>
        <div class="button is-success is-circle-player is-pulsing">
            <span class="icon" @click="isImageModalActive = true">
                <i class="material-icons">play_arrow</i>
            </span>
        </div>

        <b-modal :active.sync="isImageModalActive">
            <p class="image">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/oH8fJAhRDJM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
            </p>
        </b-modal>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isImageModalActive: false
        }
    }
}
</script>
<style lang="scss">
@import "../../../../_sass/_scifabric.scss";
@import "~buefy/src/scss/buefy";
</style>
