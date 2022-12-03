<template>
  <ion-page>
    <ion-header>
      <ion-label1>
        <strong>Ali's Chilean Restaurant </strong>
      </ion-label1>
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
    <ion-content>
      <h3 class="viewUsers">View Users</h3>
      <ion-list>
        <ion-item v-for="(item, index) in usersList" :key="index">
          {{ item["username"] }}
          <ion-button
            size="small"
            slot="end"
            @click="updateOperation(item, index)"
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
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonIcon } from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import firebaseService from "../../firebase-service";
import { call, location, trash } from "ionicons/icons";

export default defineComponent({
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
    IonPage,
    IonContent,
    IonIcon,
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
    deleteOperation(item: any, index: any) {
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
