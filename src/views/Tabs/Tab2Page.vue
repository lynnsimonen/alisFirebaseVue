<template>
  <ion-page>
    <ion-header class="top">
      <ion-toolbar></ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar>
          <ion-title size="large">Menu Items</ion-title>
          <ion-buttons slot="rightside">
          <slot name="rightside-action"></slot>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <ion-list-header lines="full">
        <ion-label>Menu</ion-label>
      </ion-list-header>
      <ion-list>
        <Tab2Container v-for="item in menu" :key="item.id" :item="item" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonRefresher,
  IonRefresherContent,
} from "@ionic/vue";
import Tab2Container from "@/components/Tab2Container.vue";
import { getMenu } from "@/data/menu";

export default defineComponent({
  name: "Tab2Page",
  data() {
    return {
      menu: getMenu(),
    };
  },
  methods: {
    refresh: (ev: CustomEvent) => {
      setTimeout(() => {
        ev.detail.complete();
      }, 3000);
    },
  },
  components: {
    Tab2Container,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonRefresher,
    IonRefresherContent,
  },
});
</script>
<style>
ion-list-header {
  margin-top: 83px;
  background-color: rgba(22, 22, 2, 0.5);
  color: white;
  height: 50px;
  vertical-align: bottom;
  font-weight: bolder;
}
</style>
