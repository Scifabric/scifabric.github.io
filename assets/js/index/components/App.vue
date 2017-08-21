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

.is-pulsing {
  position: relative;
  border: none;
  box-shadow: 0 0 0 0 rgba(0, 168, 137, 0.7);
  cursor: pointer;
  -webkit-animation: pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1);
}
.is-pulsing:hover 
{
  -webkit-animation: none;-moz-animation: none;-ms-animation: none;animation: none;
}

@-webkit-keyframes pulse {to {box-shadow: 0 0 0 45px $green-a;}}
@-moz-keyframes pulse {to {box-shadow: 0 0 0 45px $green-a;}}
@-ms-keyframes pulse {to {box-shadow: 0 0 0 45px $green-a;}}
@keyframes pulse {to {box-shadow: 0 0 0 45px $green-a;}}

</style>
