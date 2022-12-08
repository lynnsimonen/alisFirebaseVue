<template>
  <ion-page>
    <ion-header>
      <ion-label>        
        <strong>Ali's Chilean Restaurant </strong>        
      </ion-label> 
      <div>
        <p>
          <ion-icon :icon="call"> </ion-icon>
          262-334-5476
        </p>
        <p>
          <ion-icon :icon="location"> </ion-icon>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/17700+W+Capitol+Dr,+Brookfield,+WI+53045/@43.0914368,-88.1350884,17z/data=!3m1!4b1!4m5!3m4!1s0x880500d75de63091:0x5764ba1e48c99bc6!8m2!3d43.0914368!4d-88.1328944"
            rel="noopener"
            >17700 W Capitol Dr., Brookfield, WI 53045</a
          >
        </p>
      </div>
    </ion-header>
    <ion-content :fullscreen="true">
      <slot />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonLabel, IonIcon, IonPage, IonHeader, } from "@ionic/vue";
import { call, location } from "ionicons/icons";

export default {
  name: "BaseHeader",
  components: {
    IonLabel,
    IonIcon,
    IonPage,
    IonHeader,
  },
  setup() {
    return {
      call,
      location,
    };
  },
};
</script>

<style>
ion-header {
  position: absolute;
  display: block;
  padding-top: 10px;
  padding-left: 15px;
  background-color: rgb(190, 188, 185);
}

p {
  margin-top: 5px;
  margin-bottom: 5px;
  color: rgb(93, 88, 88, 1);
}
</style>
