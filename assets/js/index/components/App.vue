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
@import "../../../_sass/_scifabric.scss";
@import "~buefy/src/scss/buefy";

.is-circle-player {
    border-radius: 50% !important;
}

.is-pulsing {
  position: relative !important;
  border: none !important;
  box-shadow: 0 0 0 0 rgba(0, 168, 137, 0.7) !important;
  cursor: pointer !important;
  -webkit-animation: pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1) !important;
  -moz-animation: pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1 !important);
  -ms-animation: pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1 !important);
  animation: pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1 !important);
}
.is-pulsing:hover 
{
  -webkit-animation: none !important;-moz-animation: none !important;-ms-animation: none !important;animation: none !important;
}

@-webkit-keyframes pulse {to {box-shadow: 0 0 0 45px $green-a;}}
@-moz-keyframes pulse {to {box-shadow: 0 0 0 45px $green-a;}}
@-ms-keyframes pulse {to {box-shadow: 0 0 0 45px $green-a;}}
@keyframes pulse {to {box-shadow: 0 0 0 45px $green-a;}}

</style>
