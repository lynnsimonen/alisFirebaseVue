<template>
 <base-header>
      <h3 class="viewUsers">View Users</h3>
      <ion-list>
        <ion-item v-for="(item, index) in usersList" :key="index">
          {{ item["username"] }}
          <ion-button
            size="small"
            slot="end"
            @click="() => router.push('/alis/update/:item')"
            >update</ion-button
          >
          <ion-button
            class="deleteButton"
            size="small"
            slot="end"
            @click="deleteOperation(item, index)"
          >
            <ion-icon
              class="deleteIcon"
              slot="icon-only"
              :icon="trash"
            ></ion-icon>
          </ion-button>
        </ion-item>
      </ion-list>
      <ion-button size="small" @click="() => router.push('/alis/account')">Go back to accounts page</ion-button>
 </base-header>
</template>

<script lang="ts">
import {IonIcon, IonButton, } from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import firebaseService from "../../firebase-service";
import { call, location, trash } from "ionicons/icons";

export default defineComponent({
  props: ["username"],
  data() {
    return { usersList: [] };
  },
  name: "ReadItem",
  setup() {
    const router = useRouter();
    return { router, call, location, trash };
  },
  created() {
    const usersList = firebaseService().readOperation("Users");
    usersList.then((data: any) => {
      this.usersList = data;
    });
  },
  components: {   
    IonIcon,
    IonButton, 
  },
  methods: {
    async updateOperation(item: any, index: any) {
      const data: any = await firebaseService().findIdForDoc(
        "Users",
        item.username
      );
      console.log("Data", data);

      this.$router.push({ name: "Update", params: { id: data.username } });
    },
    deleteOperation(item: any, index: number) {
      console.log(item);
      this.usersList.splice(index, 1);
      firebaseService().deleteOperation("Users", item.username);
    },
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: rgba(255, 0, 0, 0.3);

  margin: 0;
}

#container a {
  text-decoration: none;
}

.viewUsers {
  margin-top: 100px;
  margin-left: 10px;
}
.deleteButton {
  --background: transparent;
}
.deleteIcon {
  color: black;
}
</style>
