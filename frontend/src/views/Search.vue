<template>
  <div class="homepage__onLoad"></div>

  <!-- nav -->
  <div class="profilepage__nav__container">
    <div class="profilepage__nav__wrapper">
      <div class="profilepage__nav--icon">
        <router-link to="/home" class=""
          ><svg
            class="nav__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="8.4667mm"
            height="8.4667mm"
            viewBox="0 0 24 24"
          >
            <path
              d="M15,20.67a.7467.7467,0,0,1-.53-.22L7.95,13.93a2.7349,2.7349,0,0,1,0-3.86l6.52-6.52A.75.75,0,1,1,15.53,4.61L9.01,11.13a1.2354,1.2354,0,0,0,0,1.7393L15.53,19.39A.75.75,0,0,1,15,20.67Z"
            />
          </svg>
        </router-link>
      </div>
      <input
        v-model="searchText"
        class="searchUser"
        placeholder="Looking for someone?"
      />
    </div>
  </div>
  <!-- nav -->

  <div class="homepage__container">
    <div class="user__profileContainer">
      <div v-for="user in itemsSearched" :key="user.id" class="user__profile">
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
      searchText: "",
    };
  },
  components: {},
  computed: {
    itemsSearched: function() {
      var self = this;
      if (this.searchText == "") {
        return this.users;
      }
      return this.users.filter(function(user) {
        return user.username.toLowerCase().indexOf(self.searchText) >= 0;
      });
    },
  },
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

/* NAV */
.profilepage__nav__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.profilepage__nav__wrapper {
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profilepage__nav--icon {
  transition: opacity 0.2s ease-in-out;
}

.nav__icon {
  fill: var(--light);
  height: 30px;
}

.profilepage__nav--icon:hover {
  opacity: 0.75;
}

.searchUser {
  min-width: 100px;
  height: 40px;
  background: var(--light);
  font-weight: 600;
  color: var(--greenLight);
  font-size: var(--body-firstFont);
  border: none;
  border-radius: 25px;
  padding: 16px;
}

.searchUser::placeholder {
  font-weight: 500;
  color: var(--darkgrey);
  opacity: 0.5;
}

.searchUser:focus {
  opacity: 1;
}

.homepage__container {
  width: 100vw;
  min-height: 100vh;
  background: var(--greenLight);
  padding-top: 100px;
}

.user__profileContainer {
  display: grid;
  grid-template-columns: 1fr;
}

.user__profile,
.user__pictureContainer {
  width: 100vw;
  height: 200px;
  max-height: 50vh;
}

.user__profile {
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
}

.user__profile:hover {
  opacity: 1;
}

.user__pictureContainer {
  position: relative;
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
