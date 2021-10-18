<template>
  <div class="homepage__onLoad"></div>
  <Nav />
  <!-- home page -->
  <div class="homepage__container">
    <div class="homepage__wrapper">
      <!-- create post -->
      <Post-create @reloadOnClick="refreshPosts" />
      <!-- create post -->
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

                <div class="cta__container">
                  <Like
                    :postId="post.id"
                    v-bind:key="post.id"
                    v-bind:like="like"
                    v-bind:id="post.id"
                  />
                  <CommentCta />
                </div>

                <p class="post__content--body">
                  {{ post.content }}
                </p>
                <div class="post__content--Edit">Editer</div>

                <!-- comment tplt -->

                <Comment
                  v-for="comment of post.Comments"
                  v-bind:key="comment.id"
                  v-bind:comment="comment"
                />

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
  <!-- home page -->
  <div class="responsiveSpacer"></div>
</template>

<script>
import axios from "axios";
import Nav from "@/components/Nav";
import Comment from "@/components/Comment";
import Like from "@/components/Like";
import PostCreate from "@/components/Post-create";
import CommentCta from "@/components/Comment-cta";
import * as moment from "moment";

export default {
  data() {
    return {
      posts: [],
      errors: [],
      loggedUser: "",
    };
  },
  components: {
    Nav,
    Comment,
    Like,
    CommentCta,
    PostCreate,
  },
  methods: {
    dateFormatter: function(date) {
      let formatDate = moment(date)
        .startOf("hour")
        .fromNow();

      return formatDate;
    },
    loadPosts: async function() {
      const API_SERVER = "http://localhost:3000";

      try {
        const response = await axios.get(API_SERVER + `/posts`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        this.posts = response.data;
      } catch (error) {
        this.errors.push(error);
      }
    },
    refreshPosts(payload) {
      console.log(payload);
      this.loadPosts();
    },
  },
  mounted() {
    this.loadPosts();
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: var(--spaceMed) 0px var(--spaceMed) 0px;
}
.homepage__wrapper {
  width: 90vw;
}

.post__container {
  background: var(--white);
  border-radius: 20px;
  box-shadow: 5px 5px 16px 0 rgba(0, 0, 0, 0.15),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.1);
  margin-top: var(--spaceMed);
}
.post__container:first-child {
  margin-top: 0px;
}

.profile__contentContainer--animation {
  opacity: 0;
  animation: blendIn 1s forwards cubic-bezier(0.77, 0, 0.18, 1);
  animation-delay: 0.5s;
  @for $i from 1 through 10 {
    &:nth-child(#{$i}) {
      animation-delay: $i * 0.1s;
    }
  }
}
@keyframes blendIn {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  0% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
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

.responsiveSpacer {
  display: block;
  background: var(--light);
  width: 100vw;
  height: 60px;
}

@media (max-width: 541px) {
  .homepage__container {
    margin: 0px 0px 0px 0px;
  }

  .homepage__wrapper {
    width: 100vw;
  }

  .post__content--Container {
    width: 100vw;
  }

  .post__container {
    border-radius: 0px;
    box-shadow: none;
    border-top: 5px solid var(--light);
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
  .responsiveSpacer {
    background: var(--white);
    height: calc(60px + 20px);
  }
}
</style>
