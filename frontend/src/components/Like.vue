<template>
  <div id="like">
    <div class="like__container">
      <div
        id="likeAnimation"
        class="icon__tplt like__icon"
        v-for="(btn, index) in buttons"
        type="button"
        @click="toggleActiveClass(index, postId)"
        :class="{ active: btn.active }"
        :key="btn.id"
      ></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Like",
  props: ["like", "postData", "postId"],
  data: function() {
    return {
      buttons: [{ name: "Btn1", active: false }],
    };
  },
  methods: {
    toggleActiveClass: async function(index, postId) {
      this.buttons[index].active = !this.buttons[index].active;

      const API_SERVER = "http://localhost:3000";

      try {
        const userId = localStorage.getItem("userId");

        const response = await axios.post(
          API_SERVER + `/posts/${postId}/like`,
          {
            PostId: postId,
            UserId: userId,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        this.likes = response.data;
        console.log("like?");
        console.log(this.likes);
      } catch (error) {
        this.errors.push(error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.like__container {
  width: var(--iconSize);
  height: var(--iconSize);
}
.icon__tplt {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: var(--iconSize) var(--iconSize);
  transition: all 0.2s ease-in-out;
  transition-property: background-image, opacity;
  cursor: pointer;
}
.like__icon {
  background-image: url(../../images/icons/icon-linear/icon-heart.svg);
  animation: iconBounce_out 0.45s cubic-bezier(0.86, 0, 0.07, 1);
}
.like__icon:hover {
  background-image: url(../../images/icons/icon-bold/heart-cta.svg);
  opacity: 0.7;
}

.active {
  background-image: url(../../images/icons/icon-bold/heart-cta.svg);
  animation: iconBounce_in 0.5s cubic-bezier(0.86, 0, 0.07, 1);
}
@keyframes iconBounce_in {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: translateY(-2px) scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes iconBounce_out {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
