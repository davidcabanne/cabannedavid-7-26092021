<template>
  <div id="comment">
    <div class="comment__content--body">
      <div class="comment__contentHeader ">
        <div class="comment__content--Title comment__user--Bold">
          Comments
        </div>
      </div>

      <div class="comment__content--header">
        <router-link
          :to="{ name: 'Profile', params: { id: comment.User.id } }"
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
      <div class="comment__addComment">
        <!-- v-model="sendComment" -->
        <input
          class=" form-row__input"
          placeholder="What's on your mind?"
        /><button @click="createComment()" class="button">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as moment from "moment";
// import CommentCta from "@/components/Comment-cta";

export default {
  name: "Comment",
  props: ["comment"],
  components: {
    // CommentCta,
  },
  methods: {
    dateFormatter: function(date) {
      let formatDate = moment(date)
        .startOf("hour")
        .fromNow();

      return formatDate;
    },
    toggleCreateComment(payload) {
      this.message = payload.message;

      const newInput = document.querySelector(".comment__addComment");
      newInput.classList.toggle("comment__addComment--active");
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
