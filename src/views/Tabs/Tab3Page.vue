<template>
  <base-header>
   
    <ion-list-header lines="full">
      <ion-label>Events and More</ion-label>
    </ion-list-header>
    <ion-list>
      <Tab3Container v-for="item in events" :key="item.id" :item="item" />
    </ion-list>
  </base-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { 
  IonList,
  IonListHeader,
  IonLabel,
} from "@ionic/vue";
import Tab3Container from "@/components/Tab3Container.vue";
import { getEvents } from "@/data/eventsMore";

export default defineComponent({
  name: "Tab3Page",
  data() {
    return {
      events: getEvents(),
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
    IonList,
  IonListHeader,
  IonLabel,
  Tab3Container
  },
});
</script>

<style>
ion-list-header {
  margin-top: 123px;
  background-color: rgba(22, 22, 2, 0.5);
  color: white;
  height: 50px;
  vertical-align: bottom;
  font-weight: bolder;
}
</style>
