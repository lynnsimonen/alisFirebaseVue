<template>
  <ion-page>
    <ion-header>
      <div>
        <ion-buttons slot="start">
          <ion-back-button page-default-back-link="/"></ion-back-button>
          <ion-title><h2>Event Details</h2></ion-title>
        </ion-buttons>
      </div>
    </ion-header>
    <ion-content>
      <div id="container">
        <div class="picture">
          <ion-img :src="events?.image" alt="image of event"></ion-img>
        </div>
        <h1 class="ion-text-center">{{ events?.eventName }}</h1>
        <p class="ion-text-center">
          {{ events?.details
          }}<a
            target="_blank"
            href="https://www.youtube.com/watch?v=sIVArBVb_II"
            rel="noopener"
            class="ion-text-center"
          >
            Click to watch cooking demo.</a
          >
        </p>

        <h5 class="ion-text-center">Event Date: {{ events?.eventDate }}</h5>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useIonRouter } from "@ionic/vue";
import {
  IonImg,
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
} from "@ionic/vue";
import EventDetailsContainer from "@/components/EventDetailsContainer.vue";
import { Item } from "@ionic/core/dist/types/components/item/item";
import { get } from "@/data/eventsMore";
export default {
  props: ["eventName", "eventDate", "details", "image"],
  name: "EventDetails",
  components: {
    IonImg,
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons,
  },
  computed: {},
  data() {
    let x = this.$route.params.id;
    let num = Number(x);
    return {
      events: get(num),
    };
  },
};
</script>

<style>
p {
  padding: 10px;
}
.picture {
  margin-top: 65px;
}
</style>
