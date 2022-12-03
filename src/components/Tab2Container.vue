<template>
  <ion-item
    v-if="item"
    :routerLink="'/item/' + item.id"
    :detail="false"
    class="list-item"
  >
    <div slot="start" :class="!item.read"></div>
    <ion-label class="ion-text-wrap">
      <h2>
        {{ item.itemName }}
        <span class="price">
          <ion-note>{{ item.price }}</ion-note>
          <ion-icon
            :icon="chevronForward"
            size="small"
            v-if="isIos()"
          ></ion-icon>
        </span>
      </h2>
      <h3>{{ item.description }}</h3>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { IonIcon, IonItem, IonLabel, IonNote } from "@ionic/vue";
import { chevronForward } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tab2Container",
  components: {
    IonIcon,
    IonItem,
    IonLabel,
    IonNote,
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
  margin-top: 8px;
  margin-bottom: 8px;
}

.list-item h2 {
  font-weight: 600;
  margin: 0;
}

.list-item h3 {
  margin-right: 60px;
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
