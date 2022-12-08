<template>
  <base-header>
    <h3 class="userCrud">User Update</h3>
    <ion-row>
      <ion-col>
        <ion-input
          type="email"
          v-model="usersData.username"
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
          v-model="usersData.password"
          placeholder="Enter Password"
          class="input"
          padding-horizontal
        ></ion-input>
      </ion-col>
    </ion-row>

    <div class="container">
      <ion-button @click="updateOperation()">Update Data</ion-button>
    </div>
  </base-header>
</template>

<script lang="ts">
import {} from "@firebase/util";
import { IonCol, IonInput, IonRow, IonButton } from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import firebaseService from "../../firebase-service";

export default defineComponent({
  data() {
    return { usersData: {} };
  },
  props: ["id"],
  name: "UpdateItem",
  setup() {
    const router = useRouter();
    return { router };
  },
  created() {
    firebaseService()
      .findIdForDoc("Users", this.id)
      .then((user) => {
        this.usersData = user;
      });
  },
  components: {
    IonButton,
    IonRow,
    IonCol,
    IonInput,
  },
  methods: {
    async updateOperation() {
      console.log(this.usersData);
      const updated = firebaseService().updateOperation(
        "Users",
        this.usersData
      );
      this.router.push("/read");
    },
  },
});
</script>

<style scoped>
.container {
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  margin-top: 12px;
}
.userCrud {
  vertical-align: text-bottom;
  margin-top: 150px;
  margin-left: 5px;
  font-weight: bolder;
}
ion-input.input {
  --background: rgb(245, 238, 238);
}
</style>
