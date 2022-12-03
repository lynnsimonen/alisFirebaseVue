<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <h3 class="createUser">Create User</h3>
      <ion-row>
        <ion-col>
          <ion-input
            type="email"
            v-model="username"
            placeholder="Enter Username"
            class="input"
            padding-horizontal
          ></ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-input
            type="password"
            v-model="password"
            placeholder="Enter Password"
            class="input"
            padding-horizontal
          ></ion-input>
        </ion-col>
      </ion-row>

      <div class="container">
        <ion-button @click="createOperation()">Save Data</ion-button>
      </div>

      <div class="container">
        <ion-button @click="getOperation()">View Data</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
  IonCol,
  IonInput,
  IonRow,
  IonImg,
  IonButton,
  useIonRouter,
} from "@ionic/vue";

import { useRouter } from "vue-router";
import firebaseService from "../../firebase-service";

export default defineComponent({
  data() {
    return { username: "", password: "" };
  },
  name: "CreateItem",
  setup() {
    const router = useRouter();
    return { router };
  },
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonRow,
    IonCol,
    IonInput,
  },
  methods: {
    async createOperation() {
      const userObject = {
        username: this.username,
        password: this.password,
      };
      console.log("Data", this.username, this.password);
      const UsersData = await firebaseService().createOperation(
        "Users",
        userObject
      );
    },
    getOperation() {
      this.router.push("/read");
    },
  },
});
</script>

<style scoped>
ion-input.input {
  --background: rgb(245, 238, 238);
}
.createUser {
  margin-top: 150px;
  margin-left: 5px;
}
.container {
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  margin-top: 12px;
}
</style>
