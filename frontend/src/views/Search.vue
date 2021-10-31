<template>
  <div class="homepage__onLoad"></div>

  <div class="homepage__container">
    <div class="search__header">
      <div class="user__title">Who's there?</div>
    </div>
    <div class="user__profileContainer">
      <div v-for="user in users" :key="user.id" class="user__profile">
        <router-link :to="{ name: 'Profile', params: { id: user.id } }">
          <div class="user__pictureContainer">
            <img :src="user.picture" class="user__picture" />
            <div class="user__username">{{ user.username }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// => Plugins
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  components: {},
  methods: {
    loadUsers: async function() {
      const API_SERVER = "http://localhost:3000";

      try {
        const response = await axios.get(API_SERVER + `/users`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        this.users = response.data;
        console.log(this.users);
      } catch (error) {
        this.errors.push(error);
      }
    },
  },
  mounted() {
    this.loadUsers();
  },
};
</script>

<style scoped lang="scss">
.homepage__onLoad {
  position: fixed;
  width: 100%;
  height: 100%;
  background: var(--greenLight);
  z-index: 9999;
  animation: slidesIn 1s forwards ease-in-out;
}
@keyframes slidesIn {
  0% {
    visibility: visible;
    background: var(--greenLight);
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 9999999;
    opacity: 1;
  }
  50% {
    opacity: 1;
  }

  99% {
    opacity: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    background: var(--greenLight);
  }
  100% {
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    overflow-x: hidden;
    overflow-y: visible;
    background: var(--greenLight);
  }
}

.homepage__container {
  width: 100vw;
  min-height: 100vh;
  background: var(--greenLight);
}

.user__title {
  position: fixed;
  top: 0;
  left: 0;
  font-size: 10vw;
  font-weight: 900;
  color: var(--light);
  margin-top: var(--spaceLrg);
  margin-left: var(--spaceLrg);
  z-index: 1000;
  pointer-events: none;
}

.user__profileContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.user__profile {
  width: 50vw;
  height: 50vw;
  max-height: 50vh;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
}

.user__profile:hover {
  opacity: 1;
}

.user__pictureContainer {
  position: relative;
  width: 50vw;
  height: 50vw;
  max-height: 50vh;
  overflow: hidden;
}

.user__picture {
  width: 100%;
  min-width: 50vw;
  height: 100%;
  min-heigth: 50vw;
  object-fit: cover;
}
.user__pictureContainer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--darkgrey);
  opacity: 0.25;
  z-index: 1;
}

.user__username {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: var(--firstFont);
  font-weight: 600;
  color: var(--light);
  margin-bottom: var(--spaceMed);
  margin-left: var(--spaceMed);
  z-index: 1000;
}

@media (max-width: 541px) {
}
</style>
