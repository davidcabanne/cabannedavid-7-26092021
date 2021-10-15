<template>
  <div id="comment">
    <div class="comment__content--body">
      <div class="comment__content--Title comment__user--Bold">Comments</div>
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
    </div>
  </div>
</template>

<script>
import * as moment from "moment";

export default {
  name: "Comment",
  props: ["comment"],
  methods: {
    dateFormatter: function(date) {
      let formatDate = moment(date)
        .startOf("hour")
        .fromNow();

      return formatDate;
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
.comment__content--Title {
  margin-bottom: var(--spaceMed);
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
</style>
