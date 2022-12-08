 <template>
  <base-subheader pageTitle="Create User">
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
  </base-subheader> 
</template>

<script lang="ts">

import {
  IonCol,
  IonInput,
  IonRow,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
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

.container {
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  margin-top: 12px;
}
.createUser {
  margin-top: 150px;
  margin-left: 5px;
}
</style>
