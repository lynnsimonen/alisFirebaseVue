<template>
 <base-header>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <div id="container">
        <div class="image" alt="Ali cooking empanadas with friend.">
          <div class="story">
            <h1>
              <strong>Welcome!</strong>
            </h1>
            <p2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              magnam odio, quo obcaecati consequatur molestiae facilis ipsum
              pariatur quaerat!
            </p2>
            <ion-alert
              :is-open="isOpenRef"
              header="Welcome!"
              sub-header="Dear and Valued Customer,"
              message="We are open for DINE-IN, look forward to seeing you soon!"
              :buttons="[
                {
                  text: 'OK',
                },
              ]"
              @didDismiss="setOpen(false)"
            >
            </ion-alert>
          </div>
        </div>

        <ul>
          <li><strong>Hours</strong></li>
          <li><b>Monday:</b> closed</li>
          <li><b>Tuesday:</b> 9AM <c>- 5PM</c></li>
          <li><b>Wednesday:</b> 9AM <c>- 5PM</c></li>
          <li><b>Thursday:</b> 9AM <c>- 5PM</c></li>
          <li><b>Friday:</b> 9AM <c>- 3PM</c></li>
          <li><b>Saturday:</b> 9AM <c>- 5PM</c></li>
          <li><b>Sunday:</b> 11AM <c>- 3PM</c></li>
        </ul>
      </div>
 </base-header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  IonHeader,
  IonToolbar,
  IonAlert
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonHeader,
    IonToolbar,
    IonAlert
  },
  setup() {
    const isOpenRef = ref(true);
    const setOpen = (state: boolean) => (isOpenRef.value = state);

    return { isOpenRef, setOpen };
  },
});
</script>

<style scoped>
ion-page {
  background-color: rgb(244, 228, 155);
}
#container {
  min-height: 100%;
  width: 100%;
  position: absolute;
  font-family: "Segoe Script";
  background-color: rgb(244, 228, 155);
}
.image {
  margin-top: 125px;
  border: 5px;
  border-style: solid;
  border-color: black;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(180deg, transparent, rgba(22, 22, 2, 0.5)),
    url(@/assets/AlisKitchen.jpg);

  margin-bottom: 30px;
}
.story {
  top: 43%;
  position: absolute;
  font-style: italic;
}

h1 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  padding-bottom: 5px;
  padding-right: 25px;
  color: white;
  line-height: 22px;
  letter-spacing: 5px;
  font-size: 2rem;
}
p2 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  font-size: 16px;
  line-height: 22px;
  color: white;
}
ul {
  list-style: none;
  padding-left: 25%;
  display: table;
  font-size: small;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1px;
  color: rgb(0, 0, 0, 1);
}
li {
  display: table-row;
}
b {
  display: table-cell;
  padding-right: 1em;
}
c {
  display: table-cell;
  padding-right: 1em;
}
</style>

