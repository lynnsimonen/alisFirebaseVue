<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button page-default-back-link="/"></ion-back-button>
        </ion-buttons>
        <ion-title><h6>Ali's Chilean Restaurant</h6></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-img :src="image" alt="image of event"></ion-img>
        <h2 class="ion-text-center">{{ eventName }}</h2>
        <p class="ion-text-center">{{ details }}</p>
        <h3 class="ion-text-center">{{ eventDate }}</h3>
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
  IonToolbar,
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
    IonToolbar,
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
