<template>
  <div class="homepage__onLoad"></div>
  <Nav />
  <!-- home page -->
  <div class="homepage__container">
    <div class="homepage__wrapper">
      <!-- create post component -->
      <Post-create
        @reloadOnClick="refreshPosts"
        :loggedUsername="loggedUsername"
        :loggedFirstname="loggedFirstname"
        v-on:loadPosts="loadPosts"
      />
      <!-- create post component -->

      <!-- Post component -->
      <Post
        v-for="post in posts"
        :key="post.id"
        :post="post"
        class="post__container profile__contentContainer--animation"
        v-on:loadPosts="loadPosts"
      />
      <!-- Post component -->
    </div>
  </div>
  <!-- home page -->
  <div class="responsiveSpacer"></div>
</template>

<script>
// => Plugins
import axios from "axios";

// => Components
import Nav from "@/components/Nav";
import Post from "@/components/Post";
import PostCreate from "@/components/Post-create";
// import Comment from "@/components/Comment";
// import CommentCta from "@/components/Comment-cta";

export default {
  data() {
    const loggedUser = localStorage.getItem("userId");
    const loggedUsername = localStorage.getItem("username");

    const splittedUser = loggedUsername.split(" ");
    const loggedFirstname = splittedUser[0];

    return {
      posts: [],
      errors: [],
      loggedUser: loggedUser,
      loggedUsername: loggedUsername,
      loggedFirstname: loggedFirstname,
    };
  },
  components: {
    Nav,
    Post,
    PostCreate,
    // Comment,
    // CommentCta,
  },
  methods: {
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

  .post__container {
    border-radius: 0px;
    box-shadow: none;
    border-top: 5px solid var(--light);
    margin-top: 0px;
  }

  .responsiveSpacer {
    background: var(--white);
    height: calc(60px + 20px);
  }
}
</style>
