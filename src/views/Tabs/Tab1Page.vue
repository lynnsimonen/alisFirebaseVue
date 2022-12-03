<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <Tab1Container name="Welcome!" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
} from "@ionic/vue";
import Tab1Container from "@/components/Tab1Container.vue";

export default defineComponent({
  name: "Tab1Page",
  components: {
    Tab1Container,
    IonHeader,
    IonToolbar,
    IonContent,
    IonPage,
  },
});
</script>
