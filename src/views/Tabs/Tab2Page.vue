<template>
  <base-header>
    <ion-list-header lines="full">
      <ion-label>Menu</ion-label>
    </ion-list-header>
    <ion-list>
      <Tab2Container v-for="item in menu" :key="item.id" :item="item" />
    </ion-list>
  </base-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
 IonListHeader,
 IonList,
 IonLabel
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
   IonListHeader,
   IonList,
   IonLabel
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
