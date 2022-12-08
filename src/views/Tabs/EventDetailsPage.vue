<template>
  <base-header>
    <div id="container">
      <h3 class="userCrud">Event Details</h3>
      <div class="picture">
        <ion-img :src="events?.image" alt="image of event"></ion-img>
      </div>
      <h1 class="ion-text-center">{{ events?.eventName }}</h1>
      <p class="ion-text-center">
        {{ events?.details }}
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=sIVArBVb_II"
          rel="noopener"
          class="ion-text-center"
        >
          Click to watch cooking demo.</a
        >
      </p>
      <h5 class="ion-text-center">Event Date: {{ events?.eventDate }}</h5>
      <ion-button size="small" @click="() => router.push('/alis/eventsandmore')">Go back to events page</ion-button>
    </div>
  </base-header>
</template>

<script lang="ts">
import { IonImg, IonButton } from "@ionic/vue";
import { useRouter } from "vue-router";
import { defineComponent } from 'vue';
import { get } from "@/data/eventsMore";
export default defineComponent({
  name:'EventDetailsPage',
  props: ["eventName", "eventDate", "details", "image"],
  setup() {
    const router = useRouter();
    return { router };
  },
  components: {
    IonImg,
    IonButton
  },
  computed: {},
  data() {
    let x: string | string[] = this.$route.params.id;
    let num: number;
    num = Number(x);
    return {
      events: get(num),
    };
  },
});
</script>

<style>
p {
  padding: 10px;
}
.userCrud {
  vertical-align: text-bottom;
  margin-top: 150px;
  margin-left: 5px;
  font-weight: bolder;  
}
</style>
