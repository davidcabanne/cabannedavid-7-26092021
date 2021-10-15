<template>
  <div class="homepage__onLoad"></div>
  <div class="profilepage__bodyWrapper">
    <!--<Nav />-->
    <div class="profilepage__header">
      <div class="profilepage__nav">
        <div class="profilepage__nav--icon">
          <router-link to="/home" class=""
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="8.4667mm"
              height="8.4667mm"
              viewBox="0 0 24 24"
            >
              <path
                d="M15,20.67a.7467.7467,0,0,1-.53-.22L7.95,13.93a2.7349,2.7349,0,0,1,0-3.86l6.52-6.52A.75.75,0,1,1,15.53,4.61L9.01,11.13a1.2354,1.2354,0,0,0,0,1.7393L15.53,19.39A.75.75,0,0,1,15,20.67Z"
              /></svg
          ></router-link>
        </div>
      </div>
      <div class="profile__pictureContainer">
        <img
          class="profile__picture"
          src="../../images/blank-profile-picture.png"
          v-if="picture === null"
        />
        <img :src="picture" alt="" class="profile__picture" v-else />
      </div>
      <div class="profile__username">{{ username }}</div>
      <div class="profile__infos">{{ email }}</div>
      <div class="profile__infos">Registered rank: {{ userId }}</div>
      <div class="profilepage__header--background"></div>
    </div>
    <!-- content -->
    <div class="profilepage__container">
      <div class="profilepage__wrapper">
        <div class="profile__contentContainer">
          <div class="profile__descriptionContainer">
            {{ bio }}
          </div>

          <Userpost />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import Userpost from "@/components/Userpost";
// import * as moment from "moment";

export default {
  name: "Profile",
  components: {
    Userpost,
  },
  data() {
    return {
      userId: this.$route.params.id,
      username: "",
      email: "",
      picture: "",
      bio: "",
      createdAt: "",
    };
  },

  methods: {
    loadProfil() {
      const API_SERVER = "http://localhost:3000/users/";

      fetch(API_SERVER + this.$route.params.id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.userId = data.id;
          this.username = data.username;
          this.email = data.email;
          this.picture = data.picture;
          this.bio = data.bio;
          this.createdAt = data.createdAt;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.loadProfil();
  },
};
</script>

<style scoped lang="scss">
.homepage__onLoad {
  position: fixed;
  width: 100%;
  height: 100%;
  background: var(--white);
  z-index: 9999;
  animation: slidesIn 0.4s forwards ease-out;
}
@keyframes slidesIn {
  0% {
    visibility: visible;
    background: var(--white);
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 9999999;
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  99% {
    overflow-x: hidden;
    overflow-y: hidden;
  }
  100% {
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    overflow-x: hidden;
    overflow-y: visible;
  }
}

.profilepage__bodyWrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--white);
  z-index: -10;
}

.profilepage__header {
  position: relative;
  width: 100vw;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-bottom-left-radius: var(--spaceMed);
  border-bottom-right-radius: var(--spaceMed);
  box-shadow: 5px 5px 16px 5px rgba(0, 0, 0, 0.3),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.5);
  transform: translateY(-300px);
  animation: slidesOut 0.7s forwards cubic-bezier(0.77, 0, 0.18, 1);
}

@keyframes slidesOut {
  0% {
    transform: translateY(-300px);
  }
  100% {
    transform: translateY(0px);
  }
}

.profilepage__header--background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background-image: url(https://i.pinimg.com/originals/e2/a9/08/e2a90803d8b2b37474d8135aeeee3dd3.png);
  background-size: cover;
  z-index: -1;
}
.profilepage__header--background::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: teal;
  opacity: 0.25;
  z-index: 1;
}

.profilepage__nav {
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profilepage__nav--icon {
  color: var(--white);
  margin-left: var(--spaceMed);
}
svg {
  height: var(--spaceMed);
  width: auto;
  fill: var(--light);
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
}
svg:hover {
  opacity: 0.5;
}

.profile__pictureContainer {
  width: 150px;
  height: 150px;
  margin-bottom: var(--spaceSml);
}
.profile__picture {
  width: 150px;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
  box-shadow: 5px 5px 16px 0 rgba(0, 0, 0, 0.15),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.1);
}

.profile__username {
  font-size: var(--headingThird);
  color: var(--white);
  font-weight: 800;
  margin-bottom: var(--spaceSml);
}
.profile__infos {
  font-size: var(--body-firstFont);
  font-weight: 500;
  color: var(--white);
  opacity: 0.7;
}

.profilepage__container {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
}
.profilepage__wrapper {
  padding: var(--spaceMed) 0px var(--spaceMed) 0px;
  width: 80vw;
}
.profile__contentContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: var(--spaceMed);
  opacity: 0;
  animation: blendIn 0.7s forwards cubic-bezier(0.77, 0, 0.18, 1);
  animation-delay: 0.5s;
}
@keyframes blendIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.profile__descriptionContainer {
  font-size: var(--body-secondFont);
  font-weight: 600;
  color: var(--greenPrimary);
}

.profile__activityContainer {
  width: 100%;
  margin-top: var(--spaceMed);
}

.profile__activityTitle {
  font-size: var(--body-firstFont);
  font-weight: 600;
  color: var(--darkgrey);
}

.post__container {
  color: var(--darkgrey);
}
</style>
