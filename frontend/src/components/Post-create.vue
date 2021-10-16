<template>
  <div class="post__createContainer">
    <input
      v-model="inputCreatePost"
      class=" form-row__input"
      placeholder="What's on your mind?"
    /><button @click="createPost()" class="button">Send</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Post-create",
  data() {
    return {
      inputCreatePost: "",
      userId: "",
    };
  },
  methods: {
    async createPost() {
      console.log("[=>] CREATE POST");
      const API_SERVER = "http://localhost:3000";

      try {
        this.loggedUser = await localStorage.getItem("userId");
        this.postContent = await this.inputCreatePost;

        console.log(this.loggedUser);

        const response = await axios.post(
          API_SERVER + `/posts`,
          {
            content: this.postContent,
            imageUrl: "",
            UserId: this.loggedUser,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        this.cratedPost = response.data;

        this.$emit("reloadOnClick");
      } catch (error) {
        this.errors.push(error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.post__createContainer {
  width: 90vw;
  display: flex;
  justify-content: space-between;
  margin: var(--spaceMed) 0px var(--spaceLrg) 0px;
}
.form-row__input {
  padding: var(--spaceSml);
  background: var(--white);
  font-weight: 500;
  font-size: var(--comment-firstFont);
  width: calc(100% - 45px - var(--spaceMed));
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
  background: white;
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
  width: 55px;
  padding: 16px;
  transition: 0.3s background-color;
}
.button:hover {
  cursor: pointer;
  background: var(--greenPrimary);
}

@media (max-width: 541px) {
  .post__createContainer {
    width: 100vw;
    margin: var(--spaceMed) 0px var(--spaceMed) 0px;
  }
  .form-row__input {
    width: calc(90vw - 45px - var(--spaceMed));
    margin-left: 5vw;
  }
  .button {
    margin-right: 5vw;
  }
}
</style>
