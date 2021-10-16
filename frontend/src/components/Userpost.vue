<template>
  <!-- home page -->
  <div class="homepage__container">
    <div class="homepage__wrapper">
      <!-- post tplt -->
      <div>
        <div v-if="posts && posts.length">
          <div
            v-for="post of posts"
            :key="post.id"
            class="post__container profile__contentContainer--animation"
          >
            <div class="post__content--Container">
              <div class="post__content--Wrapper">
                <div class="post__content--header">
                  <div class="post__userContainer">
                    <router-link
                      :to="{ name: 'Profile', params: { id: post.User.id } }"
                      class="user__profileContainer"
                    >
                      <img :src="post.User.picture" class="post__userPicture" />
                      <span class="post__user--Bold user__profileLink">{{
                        post.User.username
                      }}</span></router-link
                    >
                  </div>
                  <span class="post__user--BoldAlt">{{
                    dateFormatter(post.createdAt)
                  }}</span>
                </div>

                <div v-if="post.imageUrl.length > 0" class="img__container">
                  <img :src="post.imageUrl" alt="" />
                </div>

                <!-- components -->
                <!--<div class="cta__container">
                  <Like />
                  <CommentCta />
                </div>-->
                <!-- components -->

                <p class="post__content--body">
                  {{ post.content }}
                </p>
                <div class="post__content--Edit">Editer</div>

                <!-- comment tplt -->

                <!-- comment tplt -->
              </div>
            </div>
          </div>
        </div>

        <div v-if="errors && errors.length">
          <div v-for="error of errors" :key="error.id">
            {{ error.message }}
          </div>
        </div>
      </div>
      <!-- post tplt -->
    </div>
  </div>
  <div class="responsiveSpacer"></div>
  <!-- home page -->
</template>

<script>
import axios from "axios";
// import Nav from "@/components/Nav";
import * as moment from "moment";

export default {
  name: "Userpost",
  props: ["username"],
  data() {
    return {
      posts: [],
      errors: [],
    };
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
  },
  mounted() {
    this.loadPosts();
  },
};
</script>

<style scoped lang="scss">
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
  width: 90vw;
  background: var(--white);
  border-radius: 20px;
  box-shadow: 5px 5px 16px 0 rgba(0, 0, 0, 0.15),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.1);
  margin-top: var(--spaceMed);
}

// ADDED CSS

.userpost__container {
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.userpost__wrapper {
  width: 90vw;
}
.userpost__title {
  font-size: var(--headingFirst);
  font-weight: 800;
  color: var(--greenLight);
}

.homepage__container {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px var(--spaceMed) 0px;
}
.homepage__wrapper {
  width: 90vw;
}

.post__container {
  width: 90vw;
  background: var(--white);
  border-radius: 20px;
  box-shadow: 5px 5px 16px 0 rgba(0, 0, 0, 0.15),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.1);
  margin-top: var(--spaceMed);
}

.post__container:first-child {
  margin-top: var(--spaceMed);
}

.post__content--Container {
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spaceMed) 0px var(--spaceMed) 0px;
}
.post__content--Wrapper {
  width: 80vw;
}
.post__content--body {
  color: var(--darkgrey);
  font-weight: 500;
  margin-top: var(--spaceSml);
}
.post__content--body:first-child {
  padding-right: 15px;
}
.post__content--Bold {
  color: var(--greenLight);
  font-weight: 800;
}
.post__user--Bold {
  color: var(--darkgrey);
  font-weight: 800;
}
.post__user--BoldAlt {
  color: var(--darkgrey);
  font-weight: 800;
  opacity: 0.5;
}

.user__profileContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  transition-property: opacity, color, width;
}

.user__profileLink {
  position: relative;
}

.user__profileLink::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background: var(--greenLight);
  opacity: 0.8;
  animation: borderAnimation_out 0.1s ease-in-out;
}

.user__profileContainer:hover {
  opacity: 0.85;
}
.user__profileContainer:hover > .user__profileLink {
  color: var(--greenLight);
}
.user__profileContainer:hover > .user__profileLink::after {
  width: 100%;
  animation: borderAnimation_in 0.1s ease-in-out;
}
@keyframes borderAnimation_in {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes borderAnimation_out {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}

.post__content--header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: var(--spaceMed);
}

.post__content--Edit {
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-weight: 800;
  color: var(--greenLight);
  margin-top: 10px;
  padding-bottom: 2px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
}
.post__content--Edit::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: var(--greenLight);
}
.post__content--Edit:hover {
  opacity: 0.5;
}

.post__userContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.post__userPicture {
  width: var(--spaceMed);
  height: var(--spaceMed);
  border-radius: 100%;
  margin-right: var(--spaceSml);
}

.img__container {
  position: relative;
  height: var(--imgMedium);
  border-radius: 20px;
  overflow: hidden;

  & img {
    object-fit: cover;
    height: var(--imgMedium);
    width: 100%;
    opacity: 0.75;
  }
}
.img__container::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: coral;
  opacity: 0.15;
  z-index: 1;
}

.cta__container {
  display: flex;
  margin-top: var(--spaceMed);
}
.cta__container > * {
  margin-right: var(--spaceSml);
}
.cta__container:last-child {
  margin-right: 0px;
}

.profile__contentContainer--animation {
  opacity: 0;
  animation: blendIn 0.7s forwards cubic-bezier(0.77, 0, 0.18, 1);
  animation-delay: 0.85s;
  @for $i from 1 through 10 {
    &:nth-child(#{$i}) {
      animation-delay: $i * 0.3s;
    }
  }
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

@media (max-width: 541px) {
  .homepage__container {
    margin: var(--spaceSml) 0px 0px 0px;
  }

  .homepage__wrapper {
    width: 100vw;
  }

  .post__content--Container {
    width: 100vw;
  }

  .post__container {
    width: 100vw;
    border-radius: 0px;
    box-shadow: none;
    border-top: 5px solid var(--light);
    margin-top: 0px;
  }

  .post__container:first-child {
    border-top: none;
    margin-top: 0px;
  }

  .post__content--Wrapper {
    width: 90vw;
  }

  .img__container {
    position: relative;
    height: var(--imgMedium);
    border-radius: 0px;
    overflow: hidden;
    width: 100vw;
    transform: translateX(-5vw);
  }

  .userpost__container {
    width: 100vw;
  }
  .userpost__wrapper {
    width: 90vw;
  }
}
</style>
