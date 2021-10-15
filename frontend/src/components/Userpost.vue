<template>
  <div class="homepage__onLoad"></div>
  <!-- profilePage Starts here -->
  <!-- home page -->
  <div class="homepage__container">
    <div class="homepage__wrapper">
      <!-- post tplt -->
      <div>
        <div v-if="posts && posts.length">
          <div v-for="post of posts" :key="post.id" class="post__container">
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
                  <Like />
                  <CommentCta />
                </div>

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
  width: 80vw;
  background: var(--white);
  border-radius: 20px;
  box-shadow: 5px 5px 16px 0 rgba(0, 0, 0, 0.15),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.1);
  margin-top: var(--spaceMed);
}
</style>
