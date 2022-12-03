<template>
  <ion-item
    v-if="item"
    :routerLink="'/eventsandmore/' + item.id"
    :detail="false"
    class="list-item"
    :key="item.id"
  >
    <div slot="start" :class="!item.read"></div>
    <ion-thumbnail slot="start">
      <ion-img :src="item.image" :alt="item.image"></ion-img>
    </ion-thumbnail>
    <ion-label class="ion-text-wrap">
      <h4>{{item.eventDate}}</h4>
      <h2>
        {{ item.eventName }}
      </h2>    
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { IonItem, IonLabel } from "@ionic/vue";
import { chevronForward } from "ionicons/icons";
import { defineComponent } from "vue";
import { IonImg } from '@ionic/vue';

export default defineComponent({
  name: "Tab3Container",
  components: {
    IonItem,
    IonLabel,
    IonImg
  },
  props: {
    item: Object,
  },
  methods: {
    isIos: () => {
      const win = window as any;
      return win && win.Ionic && win.Ionic.mode === "ios";
    },
  },
  data() {
    return { chevronForward };
  },
});
</script>

<style scoped>
.list-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}

.list-item ion-label {
  margin-top: 16px;
  margin-bottom: 16px;
}

.list-item h2 {
  font-weight: 600;
  margin-right: 40px;
  margin-bottom: 5px;
}

.list-item h3 {
  margin-right: 40px;
}

.list-item p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 90%;
}

.list-item .price {
  float: right;
  align-items: center;
  display: flex;
}

.list-item ion-icon {
  color: #c9c9ca;
}

.list-item ion-note {
  font-size: 15px;
  margin-right: 8px;
  font-weight: normal;
}

.list-item ion-note.md {
  margin-right: 14px;
}
</style>
