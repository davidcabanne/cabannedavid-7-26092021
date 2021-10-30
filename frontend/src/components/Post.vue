<template>
  <!-- post tplt -->
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

      <!-- like container -->
      <!-- like container -->
      <div class="cta__container">
        <!--<Like :postId="postId" />-->

        <div class="cta__public">
          <div class="like__container">
            <div
              id="likeAnimation"
              class="icon__tplt--like like__icon"
              type="button"
              @click="likeFunction()"
              :class="{ active: likeActive }"
              :key="postId"
            ></div>
          </div>
          <div>
            <svg
              @click="toggleComment"
              :class="{ 'icon__comment--active': commentActive }"
              class="icon__tplt icon__comment"
              xmlns="http://www.w3.org/2000/svg"
              width="8.4667mm"
              height="8.4667mm"
              viewBox="0 0 24 24"
            >
              <path
                class="cls-1"
                d="M12,22.81a2.2668,2.2668,0,0,1-1.8-.96l-1.5-2a.4669.4669,0,0,0-.2046-.1H8c-4.1675,0-6.75-1.1289-6.75-6.75V8c0-4.416,2.334-6.75,6.75-6.75h8c4.416,0,6.75,2.334,6.75,6.75v5c0,4.416-2.334,6.75-6.75,6.75h-.5a.2627.2627,0,0,0-.2021.1025L13.8,21.85A2.2645,2.2645,0,0,1,12,22.81ZM8,2.75C4.4185,2.75,2.75,4.4183,2.75,8v5c0,4.5205,1.5479,5.25,5.25,5.25h.5a1.8647,1.8647,0,0,1,1.4067.709L11.4,20.95a.6908.6908,0,0,0,1.2,0l1.5-2A1.7651,1.7651,0,0,1,15.5,18.25H16c3.582,0,5.25-1.668,5.25-5.25V8c0-3.5815-1.668-5.25-5.25-5.25Z"
              />
              <path
                class="cls-1"
                d="M16.0059,12a1,1,0,0,1-.01-2h.01a1,1,0,1,1,0,2Z"
              />
              <path
                class="cls-1"
                d="M12.0044,12a1,1,0,0,1-.0088-2h.0088a1,1,0,0,1,0,2Z"
              />
              <path
                class="cls-1"
                d="M8.0034,12a1,1,0,0,1-.0088-2h.0088a1,1,0,1,1,0,2Z"
              />
            </svg>
          </div>
        </div>

        <div v-if="authUpdatePost" class="cta__private">
          <div @click="toggleUpdatePost()" :key="post.id">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8.4667mm"
              height="8.4667mm"
              viewBox="0 0 24 24"
              class="icon__tplt icon__edit"
            >
              <path
                class="cls-1"
                d="M15,22.75H9c-5.4321,0-7.75-2.3174-7.75-7.75V9C1.25,3.5677,3.5679,1.25,9,1.25h2a.75.75,0,0,1,0,1.5H9C4.3857,2.75,2.75,4.3856,2.75,9v6c0,4.6143,1.6357,6.25,6.25,6.25h6c4.6143,0,6.25-1.6357,6.25-6.25V13a.75.75,0,1,1,1.5,0v2C22.75,20.433,20.4326,22.75,15,22.75Z"
              />
              <path
                class="cls-1"
                d="M8.5054,17.6986a2.2138,2.2138,0,0,1-1.5923-.6309,2.26,2.26,0,0,1-.5854-1.9463l.43-3.0073A3.4245,3.4245,0,0,1,7.63,10.3695l7.88-7.88h0C17.5.5,19.52.4974,21.5107,2.49c1.99,1.99,1.99,4.0093,0,6L13.63,16.37a3.51,3.51,0,0,1-1.7432.8721l-3.0107.43A2.6642,2.6642,0,0,1,8.5054,17.6986ZM16.57,3.55,8.69,11.43a2.0043,2.0043,0,0,0-.4478.8936l-.43,3.0127a.7733.7733,0,0,0,.166.6748.7961.7961,0,0,0,.689.1758l3.0063-.4287a2.1055,2.1055,0,0,0,.9038-.457L20.45,7.43c1.1641-1.1646,1.6094-2.27,0-3.8794s-2.7168-1.1626-3.88,0Z"
              />
              <path
                class="cls-1"
                d="M19.85,9.84a.7591.7591,0,0,1-.2041-.0283,7.9465,7.9465,0,0,1-5.458-5.459.75.75,0,0,1,1.4443-.4053A6.4377,6.4377,0,0,0,20.0537,8.368.75.75,0,0,1,19.85,9.84Z"
              />
            </svg>
          </div>
          <div @click="deletePost()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8.4667mm"
              height="8.4667mm"
              viewBox="0 0 24 24"
              class="icon__tplt icon__delete"
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
          </div>
        </div>
      </div>

      <p class="post__content--body">
        {{ post.content }}
      </p>

      <!-- edit Post tplt -->
      <div class="updatePost__relativeContainer">
        <div
          v-if="authUpdatePost"
          class="updatePost__container"
          :class="{ 'toggleUpdateMenu--isActive': toggleUpdateMenuAnimation }"
        >
          <textarea
            v-model="inputCreatePost"
            class=" form-row__input--updatePost updatePost__eraseTextInput"
            :placeholder="post.content"
            cols="30"
            rows="2"
            oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
          ></textarea>
          <div class="updatePost__footer">
            <button
              @click="updatePost(inputCreatePost)"
              class="updatePost__button"
            >
              <svg
                class="button__icon button__send"
                ixmlns="http://www.w3.org/2000/svg"
                width="8.4667mm"
                height="8.4667mm"
                viewBox="0 0 24.0001 24.0001"
              >
                <path
                  class="cls-1"
                  d="M5.4072,21.7543a3.0806,3.0806,0,0,1-2.2827-.832c-.875-.876-1.5015-2.7529.4849-6.7178L4.48,12.473a1.2869,1.2869,0,0,0-.02-.9775l-.8516-1.7c-1.9849-3.9639-1.3569-5.84-.48-6.7168s2.7529-1.5054,6.7173.481l8.56,4.28C20.53,8.9017,21.7,10.3793,21.7,12s-1.17,3.0981-3.2949,4.1606l-8.56,4.28A10.2869,10.2869,0,0,1,5.4072,21.7543Zm0-18.0093a1.675,1.675,0,0,0-1.2187.394c-.7241.7241-.4395,2.5874.7612,4.9849l.8706,1.7407a2.8273,2.8273,0,0,1,.0186,2.24l-.89,1.7725c-1.2007,2.3975-1.4863,4.2607-.7642,4.9844s2.5879.4385,4.9888-.7627l8.561-4.28C19.3018,14.0355,20.2,13.0082,20.2,12s-.8984-2.0356-2.4648-2.8188l-8.561-4.28,0,0A9.1894,9.1894,0,0,0,5.4077,3.745Z"
                />
                <path
                  class="cls-1"
                  d="M10.84,12.75H5.44a.75.75,0,1,1,0-1.5h5.4a.75.75,0,0,1,0,1.5Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- edit Post tplt -->
      <!-- comment tplt -->
      <div class="comment__section">
        <div
          v-if="this.post.Comments.length > 0"
          class="comment__contentHeader "
        >
          <div class="comment__content--Title comment__user--Bold">
            Comments
          </div>
        </div>
        <Comment
          v-for="comment in this.post.Comments"
          :key="comment.id"
          :comment="comment"
          v-on:commentDeleted="handleCommentDeleted"
        />
        <div v-if="commentActive">
          <div class="commentCreate__container">
            <textarea
              v-model="inputCreateComment"
              class=" form-row__input"
              :placeholder="`What do you think ` + [[loggedFirstname]] + `?`"
              cols="30"
              rows="1"
              oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
            ></textarea>
            <button @click="createComment()" class="button button__sendAnim">
              <svg
                class="button__icon button__send"
                ixmlns="http://www.w3.org/2000/svg"
                width="8.4667mm"
                height="8.4667mm"
                viewBox="0 0 24.0001 24.0001"
              >
                <path
                  class="cls-1"
                  d="M5.4072,21.7543a3.0806,3.0806,0,0,1-2.2827-.832c-.875-.876-1.5015-2.7529.4849-6.7178L4.48,12.473a1.2869,1.2869,0,0,0-.02-.9775l-.8516-1.7c-1.9849-3.9639-1.3569-5.84-.48-6.7168s2.7529-1.5054,6.7173.481l8.56,4.28C20.53,8.9017,21.7,10.3793,21.7,12s-1.17,3.0981-3.2949,4.1606l-8.56,4.28A10.2869,10.2869,0,0,1,5.4072,21.7543Zm0-18.0093a1.675,1.675,0,0,0-1.2187.394c-.7241.7241-.4395,2.5874.7612,4.9849l.8706,1.7407a2.8273,2.8273,0,0,1,.0186,2.24l-.89,1.7725c-1.2007,2.3975-1.4863,4.2607-.7642,4.9844s2.5879.4385,4.9888-.7627l8.561-4.28C19.3018,14.0355,20.2,13.0082,20.2,12s-.8984-2.0356-2.4648-2.8188l-8.561-4.28,0,0A9.1894,9.1894,0,0,0,5.4077,3.745Z"
                />
                <path
                  class="cls-1"
                  d="M10.84,12.75H5.44a.75.75,0,1,1,0-1.5h5.4a.75.75,0,0,1,0,1.5Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- comment tplt -->
    </div>
  </div>
  <!-- post tplt -->
</template>

<script>
// => Plugins
import * as moment from "moment";
import axios from "axios";

// => Components
import Comment from "@/components/Comment";

export default {
  name: "Post",
  components: { Comment },
  data() {
    const loggedUser = localStorage.getItem("userId");
    const parsedUser = parseInt(loggedUser, 10);
    const userIds = this.post.Likes.map((like) => like.UserId);
    const likeActive = userIds.includes(parsedUser);

    const loggedUsername = localStorage.getItem("username");
    const splittedUser = loggedUsername.split(" ");
    const loggedFirstname = splittedUser[0];

    const admin = localStorage.getItem("admin");
    const authUpdatePost = parsedUser == this.post.UserId || admin === "true";

    return {
      toggleUpdateMenuAnimation: false,
      loggedUser: loggedUser,
      loggedFirstname: loggedFirstname,
      likeActive: likeActive,
      commentActive: false,
      inputCreateComment: "",
      authUpdatePost: authUpdatePost,
    };
  },
  props: ["post"],
  methods: {
    dateFormatter: function(date) {
      let formatDate = moment(date)
        .startOf("hour")
        .fromNow();

      return formatDate;
    },
    toggleUpdatePost() {
      console.log("[=>] TOGGLE UPDATE POST");
      console.log(this.post.id);

      this.toggleUpdateMenuAnimation = !this.toggleUpdateMenuAnimation;
    },
    updatePost: async function(updatedContent) {
      console.log("[=>] UPDATE POST");

      this.toggleUpdateMenuAnimation = false;

      if (
        updatedContent.length < 5 ||
        updatedContent == null ||
        updatedContent == undefined
      ) {
        console.log("not enough content!");
        return;
      }

      const API_SERVER = "http://localhost:3000/posts/";

      try {
        const response = await axios.put(
          API_SERVER + this.post.id,
          {
            content: updatedContent,
            // like IG, not picture update
            // imageUrl: "",
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        console.log(response);
        this.$emit("postUpdated");
      } catch (error) {
        this.errors.push(error);
      }
      // remove input datas
      // => reset form vue
      this.inputCreatePost = "";
    },
    deletePost: async function() {
      console.log("[=>] DELETE POST");

      let test = confirm("Are you sure you want to delete this post?");

      const API_SERVER = "http://localhost:3000/posts/";

      if (test) {
        try {
          const response = await axios.delete(API_SERVER + this.post.id, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });

          console.log(response);
          this.$emit("postUpdated");
        } catch (error) {
          this.errors.push(error);
        }
      }
    },
    likeFunction: async function() {
      console.log("[=>] POST LIKES FUNC.");

      this.likeActive = !this.likeActive;

      const API_SERVER = "http://localhost:3000";
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.post(
          API_SERVER + `/posts/${this.post.id}/like`,
          {
            PostId: this.post.id,
            UserId: userId,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        this.likes = response.data;
      } catch (error) {
        this.errors.push(error);
      }
    },
    toggleComment: async function() {
      console.log("[=>] TOGGLE COMMENT Func.");

      this.commentActive = !this.commentActive;
    },
    createComment: async function() {
      console.log("[=>] CREATE COMMENT");

      const newCommentContent = this.inputCreateComment;

      const API_SERVER = "http://localhost:3000";

      try {
        const response = await axios.post(
          API_SERVER + `/posts/${this.post.id}/comments`,
          {
            content: newCommentContent,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        console.log(response);

        this.$emit("postUpdated");

        // clear input comment content
        this.inputCreateComment = "";
        this.commentActive = false;
      } catch (error) {
        this.errors.push(error);
      }
    },
    handleCommentDeleted: function() {
      this.$emit("postUpdated");
    },
  },
};
</script>

<style scoped lang="scss">
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

// CTA SECTION
.cta__container {
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--spaceMed);
}

.cta__private {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon__tplt {
  width: auto;
  height: var(--iconSize);
  fill: var(--darkgrey);
  margin-right: var(--spaceSml);
  transition: fill 0.2s ease-in-out;
  cursor: pointer;
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

.icon__edit {
  margin-right: var(--spaceSml);
}

.icon__tplt:hover {
  fill: var(--greenLight);
}

// UPDATE SECT.

.updatePost__relativeContainer {
  position: relative;
}

.updatePost__container {
  display: none;
  position: absolute;
  opacity: 0;
  width: 80vw;
  margin-top: var(--spaceMed);
  transition: 0.3s ease-in-out;
}

.toggleUpdateMenu--isActive {
  display: bloc;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  opacity: 1;
}

/* TEXT AREA OPTIONS */
.form-row__input {
  /* font opts */
  font-family: Avenir;
  color: var(--MedGrey);
  font-size: var(--comment-firstFont);
  font-weight: 500;
  /* size specs */
  width: 80vw;
  min-width: 100px;
  padding: var(--spaceSml);
  margin-left: calc(30px + 15px);
  /* styles */
  background: var(--light);
  border-radius: 8px;
  border: 2px solid transparent;
  /* text area opts */
  outline: none;
  resize: none;
}

.form-row__input::placeholder {
  width: 80vw;
  color: var(--MedGrey);
  padding: var(spaceSml);
}

.form-row__input:focus {
  color: var(--darkgrey);
  background: white;
  border: 2px solid var(--greenLight);
}

.form-row__input--updatePost {
  /* font opts */
  font-family: Avenir;
  color: var(--MedGrey);
  font-size: var(--comment-firstFont);
  font-weight: 500;
  /* size specs */
  width: 80vw;
  min-width: 100px;
  padding: var(--spaceSml);
  /* styles */
  background: var(--light);
  border-radius: 8px;
  border: 2px solid transparent;
  /* text area opts */
  outline: none;
  resize: none;
}

.form-row__input--updatePost::placeholder {
  width: 80vw;
  color: var(--MedGrey);
  padding: var(spaceSml);
}

.form-row__input--updatePost:focus {
  color: var(--darkgrey);
  background: white;
  border: 2px solid var(--greenLight);
}

.updatePost__footer {
  width: 80vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: var(--spaceSml);
}

.updatePost__button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--greenLight);
  color: white;
  border-radius: 55px;
  border: none;
  width: 55px;
  height: 55px;
  padding: 16px;
  transition: 0.3s background-color;
  cursor: pointer;
}
.button__icon {
  height: var(--spaceMed);
  width: auto;
  // border-radius: 55px;
}
.button__send {
  fill: var(--light);
}
.button__sendAnim:hover {
  cursor: pointer;
  background: var(--greenPrimary);
}

/* like section */
.cta__public {
  display: flex;
}

.like__container {
  width: var(--iconSize);
  height: var(--iconSize);
  margin-right: var(--spaceSml);
}

.icon__comment {
  animation: pop_out 0.45s cubic-bezier(0.86, 0, 0.07, 1);
}

.icon__comment--active {
  fill: var(--greenLight);
  animation: pop_in 0.45s cubic-bezier(0.86, 0, 0.07, 1);
}

@keyframes pop_in {
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
@keyframes pop_out {
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

.icon__tplt--like {
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

/* COMMENT SECTION */

.comment__section {
  margin-top: var(--spaceMed);
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

.commentCreate__container {
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--spaceSml);
  margin-bottom: var(--spaceSml);
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--greenLight);
  color: white;
  border-radius: 55px;
  border: none;
  width: 55px;
  height: 55px;
  padding: 16px;
  margin-left: var(--spaceSml);
  transition: 0.3s background-color;
}

@media (max-width: 541px) {
  .post__content--Container {
    width: 100vw;
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

  .cta__container {
    width: 90vw;
  }
  .form-row__input,
  .form-row__input--updatePost,
  .form-row__input::placeholder,
  .updatePost__footer {
    width: 90vw;
  }

  .commentCreate__container {
    width: 90vw;
  }
}
</style>
