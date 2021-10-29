<template>
  <div id="comment">
    <div class="comment__content--body">
      <div class="comment__content--header">
        <router-link
          :to="{ name: 'Profile', params: { id: comment.UserId } }"
          class="comment__userContainer"
        >
          <img :src="comment.User.picture" class="comment__userPicture" />
          <span class="comment__user--Bold">{{ comment.User.username }}</span>
        </router-link>

        <span class="comment__user--BoldAlt">{{
          dateFormatter(comment.createdAt)
        }}</span>
      </div>
      <div class="comment__textContent comment__user--Regular">
        {{ comment.content }}
      </div>
      <button @click="deleteComment" v-if="authUpdateComment">Delete</button>
    </div>
  </div>
</template>

<script>
// => Plugins
import axios from "axios";
import * as moment from "moment";

export default {
  name: "Comment",
  props: ["comment"],
  components: {},
  data() {
    const loggedUserId = localStorage.getItem("userId");
    const parsedUserId = parseInt(loggedUserId, 10);
    const commentUserId = this.comment.UserId;

    const admin = localStorage.getItem("admin");

    const authUpdateComment = parsedUserId == commentUserId || admin === "true";

    return {
      authUpdateComment: authUpdateComment,
    };
  },
  methods: {
    dateFormatter: function(date) {
      let formatDate = moment(date)
        .startOf("hour")
        .fromNow();

      return formatDate;
    },
    deleteComment: async function() {
      console.log("[=>] DELETE COMMENT");

      console.log(this.comment);

      const API_SERVER = "http://localhost:3000/posts";

      try {
        const response = await axios.delete(
          API_SERVER + `/${this.comment.PostId}/comments/${this.comment.id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        console.log(response);

        this.$emit("commentDeleted");
      } catch (error) {
        this.errors.push(error);
      }
    },
  },
};
</script>

<style lang="scss">
#comment {
  margin-top: var(--spaceMed);
}
.comment__content {
  margin-top: 30px;
}
.comment__contentHeader {
  display: flex;
  margin-bottom: var(--spaceMed);
}
.comment__content--Title {
  margin-right: var(--spaceSml);
}
.comment__user--Bold {
  color: var(--darkgrey);
  font-weight: 800;
}
.comment__user--BoldAlt {
  color: var(--darkgrey);
  font-weight: 800;
  opacity: 0.5;
}
.comment__user--Regular {
  color: var(--darkgrey);
  font-size: var(--comment-firstFont);
  font-weight: 500;
  opacity: 0.5;
}
.comment__content--header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.comment__userContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--spaceSml);
}
.comment__userPicture {
  width: var(--spaceMed);
  height: var(--spaceMed);
  border-radius: 100%;
  margin-right: var(--spaceSml);
}
.comment__textContent {
  margin-left: calc(30px + 15px);
}

.comment__userContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  transition-property: opacity;
}
.comment__userContainer:hover {
  opacity: 0.75;
}

.comment__addComment {
  display: none;
  width: calc(100% - 45px);
  margin-left: 45px;
  margin-top: var(--spaceSml);
}

.comment__addComment--active {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // display: block;
}

.form-row__input {
  padding: var(--spaceSml);
  background: var(--lightGrey);
  font-weight: 500;
  font-size: var(--comment-firstFont);
  width: calc(100% - 45px - 45px);
  min-width: 100px;
  color: var(--MedGrey);
  border-radius: 8px;
  border: 2px solid transparent;
}

.form-row__input::placeholder {
  color: var(--MedGrey);
}

.form-row__input:focus {
  color: var(--darkgrey);
  border: 2px solid var(--greenLight);
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--greenLight);
  color: white;
  border-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  width: 45px;
  padding: 16px;
  transition: 0.3s background-color;
}
.button:hover {
  cursor: pointer;
  background: var(--greenPrimary);
}
</style>
