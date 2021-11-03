<template>
  <div class="homepage__onLoad"></div>

  <!-- nav -->
  <div class="profilepage__nav">
    <div
      class="profilepage__nav--icon"
      :class="{ 'profilepage__nav--icon--isActive': toggleNavIcon }"
    >
      <router-link to="/home" class=""
        ><svg
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
    <div
      v-if="showCustomProfile"
      @click="toggleMenu"
      class="profilepage__nav--settings"
    >
      <svg
        class="settings__icon"
        :class="{
          'settings__icon--disabled': disableProfile,
          'settings__icon--isActive': toggleSettingsIconAnimation,
          'settings__icon--activeColor': toggleSettingsIconColor,
        }"
        xmlns="http://www.w3.org/2000/svg"
        width="8.4667mm"
        height="8.4667mm"
        viewBox="0 0 24 24"
      >
        <path
          class="cls-1"
          d="M12,15.75A3.75,3.75,0,1,1,15.75,12,3.7545,3.7545,0,0,1,12,15.75Zm0-6A2.25,2.25,0,1,0,14.25,12,2.2525,2.2525,0,0,0,12,9.75Z"
        />
        <path
          class="cls-1"
          d="M15.2129,22.19a2.4454,2.4454,0,0,1-2.0977-1.1963l-.1143-.1982c-.2925-.51-.6533-.8018-.9907-.8027h-.0015c-.3394,0-.7041.293-1,.8037l-.11.1895a2.4225,2.4225,0,0,1-3.312.8691l-1.7192-.9834a2.65,2.65,0,0,1-.9771-3.6162,1.3327,1.3327,0,0,0,.2-1.2646A1.3277,1.3277,0,0,0,3.9,15.53a2.6529,2.6529,0,0,1-2.65-2.65V11.12A2.6532,2.6532,0,0,1,3.9,8.47a1.3277,1.3277,0,0,0,1.19-.4609A1.3307,1.3307,0,0,0,4.8911,6.746a2.6486,2.6486,0,0,1,.9771-3.6172l1.7295-.99a2.3608,2.3608,0,0,1,1.8257-.2461,2.4328,2.4328,0,0,1,1.4712,1.1133l.1147.1982c.2925.51.6528.8022.9907.8027h.0015c.3394,0,.7041-.2925,1-.8032l.1074-.188a2.4216,2.4216,0,0,1,3.3145-.8706l1.7188.9839a2.6485,2.6485,0,0,1,.9766,3.6162A1.33,1.33,0,0,0,18.92,8.0091a1.3266,1.3266,0,0,0,1.19.4609A2.6528,2.6528,0,0,1,22.76,11.12v1.76A2.6525,2.6525,0,0,1,20.11,15.53a1.3266,1.3266,0,0,0-1.19.4609,1.3321,1.3321,0,0,0,.1982,1.2637,2.6468,2.6468,0,0,1-.9766,3.6172l-1.7285.9893A2.3339,2.3339,0,0,1,15.2129,22.19Zm-3.2041-3.6973h.0049a2.734,2.734,0,0,1,2.2871,1.5547l.1084.1875a.9178.9178,0,0,0,1.248.3311l1.7393-.9961a1.1466,1.1466,0,0,0,.4219-1.5664,2.74,2.74,0,0,1-.1982-2.7617A2.7376,2.7376,0,0,1,20.11,14.03,1.1508,1.1508,0,0,0,21.26,12.88V11.12A1.1508,1.1508,0,0,0,20.11,9.97a2.7379,2.7379,0,0,1-2.49-1.2124,2.7375,2.7375,0,0,1,.2012-2.7637,1.1488,1.1488,0,0,0-.4238-1.5625l-1.73-.9907a.9217.9217,0,0,0-1.2627.333l-.1035.18a2.7508,2.7508,0,0,1-2.2993,1.5532h-.0054A2.7354,2.7354,0,0,1,9.709,3.953l-.1084-.1875a.9331.9331,0,0,0-.564-.4233.8686.8686,0,0,0-.6826.0923L6.6128,4.431a1.1489,1.1489,0,0,0-.4233,1.5635A2.7408,2.7408,0,0,1,6.39,8.7582,2.7392,2.7392,0,0,1,3.9,9.97a1.1509,1.1509,0,0,0-1.15,1.15v1.76A1.1509,1.1509,0,0,0,3.9,14.03a2.7382,2.7382,0,0,1,2.49,1.2119,2.7417,2.7417,0,0,1-.2012,2.7646,1.1491,1.1491,0,0,0,.4238,1.5625l1.73.99a.92.92,0,0,0,1.2627-.333l.1055-.1816A2.7491,2.7491,0,0,1,12.0088,18.4925Z"
        />
      </svg>
    </div>
  </div>
  <div class="profilepage__bodyWrapper">
    <!-- nav -->

    <!-- setting menu -->
    <div
      class="setting__menuContainer"
      :class="{ 'setting__menuContainer--isActive': toggleMenuContainer }"
    >
      <div class="setting__menuWrapper">
        <!-- popup -->
        <div class="deleteUser__container">
          <div class="deleteUser__card">
            <div class="deleteUser__cardContent">
              Are you sure you want to permanently delete your profile
              <span class="deleteUser__username">{{
                splitUsername(username)
              }}</span>
              ?
            </div>
            <div class="deleteUser__btnContainer">
              <button @click="deleteUser()" class="button deleteUser__btn--yes">
                Yes, I'm leaving
              </button>
              <button
                @click="removeToggleConfirm()"
                class="button deleteUser__btn--no"
              >
                No, I'll stay around here
              </button>
            </div>
          </div>
        </div>
        <!-- popup -->
        <!-- profile picture container -->
        <!--<div
          class="profile__pictureContainer profile__pictureContainer--setting"
        >
          <img :src="picture" alt="" class="profile__pictureSetting" />
        </div>-->
        <!-- profile picture container -->

        <div class="setting__menuHeader">
          <div class="card__title">
            Hey {{ splitUsername(username) }}, <br />
            update your profile!
          </div>
        </div>

        <div class="setting__menuBody">
          <!-- username -->
          <div class="form-row">
            <input
              v-model="newUsername"
              class="form-row__input"
              type="text"
              placeholder="Username"
            />
          </div>

          <!-- bio -->
          <div class="form-row">
            <input
              v-model="newBio"
              class="form-row__input"
              type="text"
              placeholder="Bio"
            />
          </div>

          <!-- profile picture -->
          <div class="form-row">
            <input
              v-model="newPicture"
              class="form-row__input"
              type="text"
              placeholder="Profile picture url"
            />
          </div>

          <!-- email -->
          <div class="form-row">
            <input
              v-model="newEmail"
              class="form-row__input"
              type="text"
              placeholder="Adresse mail"
            />
          </div>

          <!-- cta container -->
          <div class="cta__container">
            <!-- update Btn -->
            <div class="form-row__btn">
              <button
                @click="updateUser()"
                class="button btn__updateUser"
                :class="{ 'button--disabled': !checkInputs }"
              >
                <span>Update</span>
              </button>
            </div>
            <!-- delete Btn -->
            <div class="form-row__btn">
              <button
                @click="toggleConfirm()"
                class="button btn__deleteUser"
                :class="{ 'button--disabled': !checkInputs }"
              >
                <span>Delete profile</span>
              </button>
            </div>
          </div>
          <!-- cta container -->
        </div>
      </div>
    </div>
    <!-- setting menu -->

    <div class="profilepage__header">
      <div class="profile__pictureContainer">
        <!-- <img
          v-if="picture === null"
          :src="defaultPicture"
          class="profile__picture"
        />
        <img v-else :src="picture" alt="" class="profile__picture" /> -->
        <img :src="picture" alt="" class="profile__picture" />
      </div>
      <div class="profile__username">{{ username }}</div>
      <div class="profile__infos">{{ email }}</div>
      <div class="profile__infos">User id: {{ userId }}</div>
      <div class="profilepage__header--background"></div>
    </div>
    <!-- content -->
    <div class="profilepage__container">
      <div class="profilepage__wrapper">
        <div
          class="profile__contentContainer profile__contentContainer--animation"
        >
          <div class="profile__descriptionContainer">
            {{ bio }}
          </div>
          <div class="userpost__container">
            <div class="userpost__wrapper">
              <span class="userpost__title"
                ><span class="userpost__title--accent"
                  >{{ splitUsername(username) }}'s</span
                >
                latest activity:</span
              >
            </div>
          </div>
          <Post
            v-for="post in posts"
            :key="post.id"
            :post="post"
            class="post__container profile__contentContainer--animation"
            v-on:postUpdated="loadPosts"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Post from "@/components/Post";
import * as moment from "moment";

export default {
  name: "Profile",
  components: {
    Post,
  },
  data() {
    return {
      userId: this.$route.params.id,
      username: "",
      email: "",
      picture: "",
      bio: "",
      createdAt: "",
      defaultPicture: require("../../images/blankprofilepicture.png"),
      disableProfile: false,
      toggleSettingsIconAnimation: false,
      toggleSettingsIconColor: false,
      toggleNavIcon: false,
      toggleMenuContainer: false,
      posts: [],
    };
  },
  computed: {
    checkInputs: function() {
      if (
        this.picture != "" &&
        this.username != "" &&
        this.email != "" &&
        this.password != ""
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    dateFormatter: function(date) {
      let formatDate = moment(date)
        .startOf("hour")
        .fromNow();

      return formatDate;
    },
    async loadPosts() {
      const API_SERVER = "http://localhost:3000";

      try {
        const response = await axios.get(
          API_SERVER + `/posts/user/` + this.$route.params.id,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        this.posts = response.data;
      } catch (error) {
        this.errors.push(error);
      }
    },
    showCustomProfile() {
      const loggedUserId = localStorage.getItem("userId");
      const parsedUserId = parseInt(loggedUserId, 10);
      const admin = localStorage.getItem("admin");

      if (parsedUserId == this.$route.params.id || admin === "true") {
        console.log("[=>] Good User!");

        return true;
      } else {
        console.log("[=>] wrong User!");

        this.disableProfile = true;

        return false;
      }
    },

    loadProfile: async function() {
      const API_SERVER = "http://localhost:3000/users/";

      try {
        const response = await axios.get(API_SERVER + this.$route.params.id, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        this.userId = response.data.id;
        this.username = response.data.username;
        this.email = response.data.email;
        this.picture = response.data.picture;
        this.bio = response.data.bio;
        this.createdAt = response.data.createdAt;
      } catch (error) {
        this.errors.push(error);
      }
    },
    splitUsername(username) {
      const splittedUser = username.split(" ");
      const firstName = splittedUser[0];
      return firstName;
    },
    toggleMenu: function() {
      this.toggleSettingsIconAnimation = !this.toggleSettingsIconAnimation;

      this.toggleSettingsIconColor = !this.toggleSettingsIconColor;

      this.toggleNavIcon = !this.toggleNavIcon;

      this.toggleMenuContainer = !this.toggleMenuContainer;
    },
    updateUser: async function() {
      console.log("[=>] UPDATE USER");

      // UPDATED USERNAME
      let updatedUsername = this.newUsername;
      if (
        this.newUsername === "" ||
        this.newUsername === null ||
        this.newUsername === undefined
      ) {
        updatedUsername = this.username;
      }

      // UPDATED EMAIL
      let updatedEmail = this.newEmail;
      if (
        this.newEmail === "" ||
        this.newEmail === null ||
        this.newEmail === undefined
      ) {
        updatedEmail = this.email;
      }

      // UPDATED PICTURE
      let updatedPicture = this.newPicture;
      if (
        this.newPicture === "" ||
        this.newPicture === null ||
        this.newPicture === undefined
      ) {
        updatedPicture = this.picture;
      }

      // UPDATED BIO
      let updatedBio = this.newBio;
      if (
        this.newBio === "" ||
        this.newBio === null ||
        this.newBio === undefined
      ) {
        updatedBio = this.bio;
      }

      const API_SERVER = "http://localhost:3000/users/";

      try {
        const response = await axios.put(
          API_SERVER + this.$route.params.id,
          {
            username: updatedUsername,
            email: updatedEmail,
            picture: updatedPicture,
            bio: updatedBio,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        this.newUser = response.data;
        console.log(this.newUser);

        // toggle animation back to default
        this.toggleSettingsIconAnimation = false;
        this.toggleSettingsIconColor = false;
        this.toggleNavIcon = false;
        this.toggleMenuContainer = false;

        // clear inputs
        this.newUsername = "";
        this.newEmail = "";
        this.newPicture = "";
        this.newBio = "";

        // re-render
        this.loadProfile();
        this.loadPosts();
      } catch (error) {
        // this.errors.push(error);
        console.log(error);
      }
    },
    toggleConfirm: function() {
      console.log("[=>] TOGGLE CONFIRM !");

      const navIcon = document.querySelector(".settings__icon");
      navIcon.classList.add("settings__icon--disabled");

      const deleteConfirm = document.querySelector(".deleteUser__container");
      deleteConfirm.classList.add("deleteUser__container--isActive");
    },
    removeToggleConfirm: function() {
      // settings menu animation
      const deleteConfirm = document.querySelector(".deleteUser__container");
      deleteConfirm.classList.remove("deleteUser__container--isActive");

      const navIcon = document.querySelector(".settings__icon");
      navIcon.classList.remove("settings__icon--disabled");
    },
    deleteUser: async function() {
      console.log("[=>] DELETE USER!");

      // remove deleteUser inputs section
      const clearInputContainer = document.querySelector(
        ".deleteUser__btnContainer"
      );
      clearInputContainer.remove();

      // remove deleteUser card content
      const clearCardContainer = document.querySelector(
        ".deleteUser__cardContent"
      );
      clearCardContainer.innerHTML = "";

      // create element, add styles, add message
      const messageContainer = document.createElement("div");
      clearCardContainer.appendChild(messageContainer);

      const deleteUserCard = document.querySelector(".deleteUser__card");
      messageContainer.classList.add("deleteUser__messageContent");
      clearCardContainer.classList.toggle(
        "deleteUser__messageContent--isActive"
      );
      deleteUserCard.classList.toggle("deleteUserCard--isActive");
      messageContainer.innerHTML = `We're sad to see you go ${this.username}`;

      const admin = localStorage.getItem("admin");

      const API_SERVER = "http://localhost:3000/users/";

      try {
        const response = await axios.delete(
          API_SERVER + this.$route.params.id,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        console.log(response);

        if (admin === "true") {
          this.$router.push("/home");
        } else {
          // remove user from local storage
          localStorage.removeItem("username");
          localStorage.removeItem("userId");
          localStorage.removeItem("token");

          setTimeout(() => this.$router.push("/"), 3000);
        }
      } catch (error) {
        this.errors.push(error);
      }
    },
  },
  mounted() {
    this.showCustomProfile();
    this.loadProfile();
    this.loadPosts();
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
  margin-top: -300px;
  animation: slidesOut 0.7s forwards cubic-bezier(0.77, 0, 0.18, 1);
}

@keyframes slidesOut {
  0% {
    margin-top: -300px;
  }
  100% {
    margin-top: 0px;
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
  box-shadow: 5px 5px 16px 0 rgba(0, 0, 0, 0.4),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.2);
}

.profile__username {
  font-size: var(--headingThird);
  color: var(--white);
  font-weight: 900;
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
  width: 90vw;
}

.profile__contentContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile__contentContainer--animation {
  opacity: 0;
  animation: blendIn 0.7s forwards cubic-bezier(0.77, 0, 0.18, 1);
  animation-delay: 0.65s;
}

@keyframes blendIn {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

.profile__descriptionContainer {
  font-size: var(--body-secondFont);
  font-weight: 600;
  color: var(--greenPrimary);
  margin-top: var(--spaceLrg);
  margin-bottom: var(--spaceLrg);
  width: 80vw;
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
  background: var(--white);
  border-radius: 20px;
  box-shadow: 5px 5px 16px 0 rgba(0, 0, 0, 0.15),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.1);
  margin-top: var(--spaceMed);
  // margin-bottom: var(--spaceMed);
}

.post__container:first-child {
  margin-top: 0px;
}
.post__container:last-child {
  margin-bottom: var(--spaceMed);
}

.userpost__container {
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.userpost__wrapper {
  width: 90vw;
}
.userpost__title {
  font-size: var(--headingFirst);
  font-weight: 900;
  color: var(--darkgrey);
}
.userpost__title--accent {
  color: var(--greenLight);
}

// nav & settings menu
.setting__menuContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--MedGrey);
  padding-top: var(--spaceLrg);
  padding-bottom: var(--spaceLrg);
  transform: translateX(100vw);
  transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  z-index: 100;
  transition-delay: 200ms;
}

.setting__menuContainer--isActive {
  transform: translateX(0vw);
  transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  transition-property: transform;
  transition-delay: 200ms;
}

.setting__menuWrapper {
  width: 80vw;
  max-width: var(--maxWidth);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.setting__menuHeader {
  margin-bottom: var(--spaceMed);
}

.profilepage__nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 200;
}

.profilepage__nav--icon {
  color: var(--white);
  margin-top: var(--spaceMed);
  margin-left: var(--spaceMed);
  transition: opacity 0.2s ease-in-out;
}

.profilepage__nav--icon--isActive {
  opacity: 0;
}

.profilepage__nav--settings {
  margin-top: var(--spaceMed);
  margin-right: var(--spaceMed);
  height: 30px;
  width: 30px;
  transition: all 0.5s ease-in-out;
  transform-origin: center;
}

svg {
  height: var(--spaceMed);
  width: auto;
  fill: var(--light);
  cursor: pointer;
}

.profilepage__nav--icon:hover,
.profilepage__nav--settings:hover {
  opacity: 0.5;
}

.settings__icon {
  transition: 0.5s cubic-bezier(0.99, -0.67, 0.32, 1.58);
}

.settings__icon--isActive {
  transform: rotate(-180deg);
  position: fixed;
}
.settings__icon--activeColor {
  fill: var(--greenLight);
}

.settings__icon--disabled {
  display: none;
}

.form-row {
  display: flex;
  margin-bottom: 20px;
}

.form-row:last-child {
  margin-bottom: 0px;
}

.form-row__input {
  min-width: 100px;
  width: 80vw;
  max-width: var(--maxWidth);
  font-weight: 500;
  font-size: var(--body-firstFont);
  color: black;
  padding: var(--spaceSml);
  border-radius: 8px;
  border: 2px solid transparent;
  background: var(--lightGrey);
}

.form-row__input::placeholder {
  color: var(--greenLight);
  opacity: 0.5;
}

.form-row__input:focus {
  border: 2px solid var(--greenLight);
}

.card__title {
  color: var(--white);
  font-size: var(--headingThird);
  font-weight: 900;
  margin-bottom: var(--spaceSml);
  width: 80vw;
}

.profile__pictureContainer--setting {
  margin-bottom: var(--spaceLrg);
}
.profile__pictureSetting {
  width: 150px;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
  opacity: 0.9;
  box-shadow: 5px 5px 16px 0 rgba(0, 0, 0, 0.2),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.6);
}

.cta__container {
  width: 80vw;
  max-width: var(--maxWidth);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: var(--spaceMed);
}

.button {
  color: white;
  border-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  width: 150px;
  min-width: 100px;
  max-width: var(--maxWidth);

  height: 50px;
  padding: 16px;
  transition: 0.3s background-color;
  cursor: pointer;
}

.btn__updateUser {
  background: var(--greenLight);
}

.btn__updateUser:hover {
  background: var(--greenPrimary);
}

.btn__deleteUser {
  background: var(--red);
}

.btn__deleteUser:hover {
  opacity: 0.5;
}

.deleteUser__container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  z-index: -1;
  opacity: 0;
  animation: opacity_out 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  // transition: opacity 1s cubic-bezier(0.86, 0, 0.07, 1);
}
.deleteUser__container--isActive {
  opacity: 1;
  z-index: 999;
  animation: opacity_in 0.5s cubic-bezier(0.86, 0, 0.07, 1);
}

@keyframes opacity_in {
  0% {
    z-index: -1;
    opacity: 0;
  }
  100% {
    opacity: 1;
    z-index: 999;
  }
}
@keyframes opacity_out {
  0% {
    opacity: 1;
    z-index: 999;
  }
  99% {
    opacity: 0;
  }
  100% {
    z-index: -1;
    opacity: 0;
  }
}

.deleteUser__card {
  position: relative;
  width: 100vw;
  // max-width: 540px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--darkgrey);
}

.deleteUser__cardContent {
  width: 80vw;
  max-width: 540px;
  color: var(--light);
  font-weight: 900;
  font-size: var(--headingThird);
}

.deleteUser__messageContent {
  width: 80vw;
  max-width: 540px;
  color: var(--light);
  font-weight: 900;
  font-size: var(--headingThird);
}

.deleteUserCard--isActive {
  animation: background_goodbye 2.3s cubic-bezier(0.86, 0, 0.07, 1) forwards;
}

.deleteUser__messageContent--isActive {
  animation: goodbye 2.3s cubic-bezier(0.86, 0, 0.07, 1) forwards;
}

@keyframes goodbye {
  0% {
    transform-origin: center;
    opacity: 0;
  }
  20% {
    transform: translate3d(0, 20px, 0) rotate3d(0, 0, 1, -10deg);
    opacity: 0;
  }
  45% {
    transform: translate3d(0, -20px, 0) rotate3d(0, 0, 1, 10deg);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 50vh, 0) rotate3d(0, 0, 0, 0deg);
  }
}
@keyframes background_goodbye {
  0% {
    background: var(--darkgrey);
  }
  100% {
    background: var(--greenLight);
  }
}

.deleteUser__btnContainer {
  width: 80vw;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  margin-top: var(--spaceLrg);
}

.deleteUser__btn--yes {
  margin-bottom: var(--spaceMed);
}

.deleteUser__btn--yes,
.deleteUser__btn--no {
  color: var(--red);
  width: 80vw;
  background: var(--light);
}

.deleteUser__btn--yes:hover {
  color: var(--light);
  background: var(--red);
}

.deleteUser__btn--no:hover {
  color: var(--light);
  background: var(--greenLight);
}

@media (max-width: 541px) {
  .profile__descriptionContainer {
    width: 90vw;
  }

  .userpost__container {
    width: 100vw;
  }

  .post__container {
    border-radius: 0px;
    box-shadow: none;
    border-top: 5px solid var(--light);
  }

  .userpost__wrapper {
    width: 90vw;
  }
}

@media (max-width: 375px) {
  .button {
    width: 130px;
    min-width: 100px;
    max-width: var(--maxWidth);
    height: 50px;
    padding: 16px;
  }
}
</style>
