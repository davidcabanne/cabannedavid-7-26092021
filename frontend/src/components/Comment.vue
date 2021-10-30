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

        <span class="comment__date comment__user--BoldAlt">{{
          dateFormatter(comment.createdAt)
        }}</span>
      </div>
      <div class="comment__textContent comment__user--Regular">
        {{ comment.content }}
      </div>
      <div class="comment__btnContainer">
        <button
          @click="deleteComment"
          v-if="authUpdateComment"
          class="comment__btn--delete"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.4667mm"
            height="8.4667mm"
            viewBox="0 0 24 24"
            class="comment__icon--delete"
          >
            <path
              class="cls-1"
              d="M21.001,6.73c-.0244,0-.05-.001-.0752-.0034a79.467,79.467,0,0,0-15.81-.2l-2.0425.2a.75.75,0,0,1-.1465-1.4932l2.04-.2a80.9826,80.9826,0,0,1,16.1074.2A.75.75,0,0,1,21.001,6.73Z"
            />
            <path
              class="cls-1"
              d="M15.499,5.72a.7493.7493,0,0,1-.7383-.625l-.22-1.3C14.3994,2.9291,14.37,2.75,13.31,2.75H10.69c-1.0562,0-1.08.1377-1.23,1.0347l-.22,1.31A.75.75,0,0,1,7.76,4.8456l.22-1.31C8.1426,2.5712,8.3647,1.25,10.69,1.25h2.62c2.335,0,2.5615,1.3833,2.7109,2.2988l.2188,1.2964a.75.75,0,0,1-.6143.8647A.7828.7828,0,0,1,15.499,5.72Z"
            />
            <path
              class="cls-1"
              d="M15.21,22.75H8.79c-3.4932,0-3.6289-1.9336-3.7383-3.4873l-.65-10.0747a.75.75,0,0,1,1.4971-.0967l.65,10.0708C6.6553,20.681,6.6953,21.25,8.79,21.25h6.42c2.0947,0,2.1348-.5693,2.2422-2.0928l.6494-10.0659a.7631.7631,0,0,1,.7959-.7.7492.7492,0,0,1,.7.7969l-.6494,10.07C18.8389,20.8168,18.7031,22.75,15.21,22.75Z"
            />
            <path
              class="cls-1"
              d="M13.66,17.25H10.33a.75.75,0,0,1,0-1.5h3.33a.75.75,0,0,1,0,1.5Z"
            />
            <path
              class="cls-1"
              d="M14.5,13.2494h-5a.75.75,0,1,1,0-1.5h5a.75.75,0,1,1,0,1.5Z"
            />
          </svg>
        </button>
      </div>
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
  margin-bottom: var(--spaceSml);
}

.comment__userContainer {
  height: var(--spaceMed);
  display: flex;
  justify-content: center;
  align-items: center;
}

.comment__userPicture {
  width: var(--spaceMed);
  height: var(--spaceMed);
  border-radius: 100%;
  margin-right: var(--spaceSml);
}

.comment__date {
  height: var(--spaceMed);
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

.comment__btnContainer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: var(--spaceSml);
}

.comment__btn--delete {
  border: none;
  background: none;
  margin-left: calc(30px + 15px);
  cursor: pointer;
}

.comment__icon--delete {
  width: auto;
  margin-right: 0;
  height: var(--iconSize);
  fill: var(--MedGrey);
  transition: fill 0.2s ease-in-out;
}

.comment__icon--delete:hover {
  fill: var(--red);
}
</style>
