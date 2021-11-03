<template>
  <div class="post__createContainer">
    <div class="post__createWrapper">
      <textarea
        v-model="inputCreatePost"
        class=" form-row__input post__create--eraseTextInput"
        :placeholder="`What's on your mind ` + [[loggedFirstname]] + `?`"
        cols="30"
        rows="2"
        oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
      ></textarea>
      <div class="post__createFooterContainer">
        <input
          v-model="inputImageUrl"
          class="form-row__input post__imgPlaceholder post__create--eraseImgInput"
          placeholder="Please paste your image url here"
        />
        <div class="post__createFooterSpacer"></div>
        <div class="post__createFooter">
          <button
            @click.prevent="toggleImgInput('value1')"
            class="button button__custom button__imgAnim"
          >
            <svg
              class="button__icon button__img"
              xmlns="http://www.w3.org/2000/svg"
              width="8.4667mm"
              height="8.4667mm"
              viewBox="0 0 24.0001 24.0001"
            >
              <path
                class="cls-1"
                d="M18.3535,22.75H5.59a4.3843,4.3843,0,0,1-1.9565-.4658A4.3581,4.3581,0,0,1,1.7,16.433l1.7183-3.4482A3.2479,3.2479,0,0,1,5.9048,11.057a3.2274,3.2274,0,0,1,2.812,1.3657l.2231.2842a1.6144,1.6144,0,0,0,.7661.6792,1.4919,1.4919,0,0,0,1.938-.8262l1.93-3.4937a3.3848,3.3848,0,0,1,2.9492-2.09c1.12.0576,2.085.9028,2.7158,2.3794l3.13,7.31a4.3662,4.3662,0,0,1-4.0156,6.085ZM6.1753,12.5428a1.015,1.015,0,0,0-.1157.0063,1.7754,1.7754,0,0,0-1.3,1.1074L3.0415,17.1048a2.857,2.857,0,0,0,1.2661,3.84,2.8844,2.8844,0,0,0,1.2837.3057H18.3525A2.8659,2.8659,0,0,0,20.99,17.2562v-.001l-3.13-7.31C17.4775,9.05,16.9492,8.5,16.4463,8.474c-.5244-.0254-1.0869.4673-1.56,1.32l-1.8911,3.41A2.9627,2.9627,0,0,1,9.145,14.7767,3.01,3.01,0,0,1,7.71,13.5609l-.17-.208A1.8371,1.8371,0,0,0,6.1753,12.5428Z"
              />
              <path
                class="cls-1"
                d="M6.97,8.75A3.75,3.75,0,1,1,10.72,5,3.7541,3.7541,0,0,1,6.97,8.75Zm0-6A2.25,2.25,0,1,0,9.22,5,2.2525,2.2525,0,0,0,6.97,2.75Z"
              />
            </svg>
          </button>
          <!-- upload image sect -->

          <div class="button__inputContainer button__margin button__uploadAnim">
            <input type="file" id="actual-btn" hidden />
            <label for="actual-btn">Choose File</label>
            <button class="button button__upload">
              <svg
                class="button__icon button__uploadIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="8.4667mm"
                height="8.4667mm"
                viewBox="0 0 24 24"
              >
                <path
                  class="cls-1"
                  d="M15,22.75H9c-5.4321,0-7.75-2.3174-7.75-7.75V9C1.25,3.5677,3.5679,1.25,9,1.25h6c5.4326,0,7.75,2.3179,7.75,7.75v6C22.75,20.433,20.4326,22.75,15,22.75Zm-6-20C4.3857,2.75,2.75,4.3856,2.75,9v6c0,4.6143,1.6357,6.25,6.25,6.25h6c4.6143,0,6.25-1.6357,6.25-6.25V9c0-4.6143-1.6357-6.25-6.25-6.25Z"
                />
                <path
                  class="cls-1"
                  d="M15,10.26a.7467.7467,0,0,1-.53-.22L12,7.5707,9.53,10.04A.75.75,0,0,1,8.47,8.98l3-3a.75.75,0,0,1,1.0605,0l3,3A.75.75,0,0,1,15,10.26Z"
                />
                <path
                  class="cls-1"
                  d="M12,15.26a.75.75,0,0,1-.75-.75v-8a.75.75,0,1,1,1.5,0v8A.75.75,0,0,1,12,15.26Z"
                />
                <path
                  class="cls-1"
                  d="M12,18.23a19.6852,19.6852,0,0,1-6.2378-1.0088.75.75,0,1,1,.4756-1.4219,18.3143,18.3143,0,0,0,11.5249,0,.7495.7495,0,1,1,.4746,1.4219A19.68,19.68,0,0,1,12,18.23Z"
                />
              </svg>
            </button>
          </div>

          <!-- upload image sect -->

          <button @click="createPost()" class="button button__sendAnim">
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Post-create",
  data() {
    const loggedUsername = localStorage.getItem("username");
    const splittedUser = loggedUsername.split(" ");
    const loggedFirstname = splittedUser[0];

    return {
      inputCreatePost: "",
      inputImageUrl: "",
      loggedFirstname: loggedFirstname,
    };
  },
  methods: {
    async createPost() {
      console.log("[=>] CREATE POST");
      const API_SERVER = "http://localhost:3000";

      try {
        const loggedUserId = localStorage.getItem("userId");
        const postContent = await this.inputCreatePost;
        const postImage = await this.inputImageUrl;

        const response = await axios.post(
          API_SERVER + `/posts`,
          {
            content: postContent,
            imageUrl: postImage,
            UserId: loggedUserId,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        console.log(response);

        // emits eventListener to parent "Home"
        this.$emit("postUpdated");

        // remove input datas
        // const eraseTextInput = document.querySelector(
        //   ".post__create--eraseTextInput"
        // );
        // const eraseImgInput = document.querySelector(
        //   ".post__create--eraseImgInput"
        // );

        // eraseTextInput.value = "";
        // eraseImgInput.value = "";

        this.inputCreatePost = "";
        this.inputImageUrl = "";
      } catch (error) {
        this.errors.push(error);
      }
    },
    toggleImgInput: function() {
      console.log("toggled");

      let isActive = "--isActive";

      const toggleInput = document.querySelector(".post__imgPlaceholder");
      const toggleBtn = document.querySelector(".button__custom");
      const toggleSvg = document.querySelector(".button__img");
      const toggleCta = document.querySelector(".post__createFooter");
      const togglePadding = document.querySelector(".post__createContainer");

      toggleInput.classList.toggle(`post__imgPlaceholder${isActive}`);
      toggleBtn.classList.toggle(`button__custom${isActive}`);
      toggleSvg.classList.toggle(`button__img${isActive}`);
      toggleCta.classList.toggle(`post__createFooter${isActive}`);
      togglePadding.classList.toggle(`post__createContainer${isActive}`);
    },
    animationOnLoad: function() {
      let isActive = "--isActive";

      document.querySelector(".post__imgPlaceholder").mouseout(function() {
        document
          .querySelector(this)
          .classList.add(`post__imgPlaceholder${isActive}`);
      });

      document.querySelector(".button__custom").mouseout(function() {
        document.querySelector(this).classList.add(`button__custom${isActive}`);
      });

      document.querySelector(".button__img").mouseout(function() {
        document.querySelector(this).classList.add(`button__img${isActive}`);
      });

      document.querySelector(".post__createFooter").mouseout(function() {
        document
          .querySelector(this)
          .classList.add(`post__createFooter${isActive}`);
      });

      document.querySelector(".post__createContainer").mouseout(function() {
        document
          .querySelector(this)
          .classList.add(`post__createContainer${isActive}`);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.post__createContainer {
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  border-radius: 20px;
  box-shadow: 5px 5px 16px 0 rgba(0, 0, 0, 0.15),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.1);
  margin: var(--spaceMed) 0px var(--spaceLrg) 0px;
  animation: padding_out 0.3s ease-in-out forwards;
}

.post__createContainer--isActive {
  animation: padding_in 0.3s ease-in-out forwards;
}

.post__createWrapper {
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: var(--spaceMed) 0px var(--spaceMed) 0px;
}

.post__createFooterContainer {
  position: relative;
}

.post__createFooter {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: var(--spaceSml);
  background: var(--white);
  animation: moves_out 0.3s ease-in-out forwards;
}

.post__createFooter--isActive {
  margin-top: var(--spaceSml);
  animation: moves_in 0.3s ease-in-out forwards;
}

.post__imgPlaceholder {
  opacity: 0;
  margin-top: var(--spaceSml);
}

.post__imgPlaceholder--isActive {
  animation: fades_in 0.75s ease-in-out forwards;
}
@keyframes fades_in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
@keyframes fades_out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes moves_in {
  0% {
    margin-top: var(--spaceSml);
  }

  100% {
    margin-top: calc(30px + 55px);
  }
}
@keyframes moves_out {
  0% {
    margin-top: calc(30px + 55px);
  }
  100% {
    margin-top: var(--spaceSml);
  }
}
@keyframes padding_in {
  0% {
    padding-top: 15px;
  }

  100% {
    padding-bottom: calc(25px + var(--spaceSml) + var(--spaceMed));
  }
}
@keyframes padding_out {
  0% {
    padding-bottom: calc(25px + var(--spaceSml) + var(--spaceMed));
  }
  100% {
    padding-top: 15px;
  }
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
  transition: 0.3s background-color;
}

.button__icon {
  height: var(--spaceMed);
  width: auto;
  // border-radius: 55px;
}
.button__custom {
  border: none;
  background: var(--light);
}
.button__upload {
  border: none;
  background: var(--light);
}

.button__custom--isActive {
  background: var(--red);
}

.button__send {
  fill: var(--light);
}

.button__img {
  fill: var(--darkgrey);
  transition: all 0.3s ease-in-out;
  transition-property: background, fill;
}

.button__img--isActive {
  fill: var(--light);
}

.button__imgAnim:hover {
  background: var(--MedGrey);
}
.button__imgAnim:hover > .button__img {
  fill: var(--light);
}

.button__sendAnim:hover {
  cursor: pointer;
  background: var(--greenPrimary);
}

.button__margin {
  margin-left: var(--spaceSml);
  margin-right: auto;
}

.button__inputContainer {
  position: relative;
  width: 55px;
  height: 55px;
}

label {
  position: absolute;
  top: 0;
  left: 0;
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 40px;
  opacity: 0;
  cursor: pointer;
}

.button__uploadIcon {
  fill: var(--darkgrey);
}
.button__uploadAnim:hover > .button__upload {
  background: var(--MedGrey);
}
.button__uploadAnim:hover > .button__uploadIcon {
  fill: var(--light);
}

@media (max-width: 541px) {
  .post__createContainer {
    width: 100vw;
    margin: 0px;
    border-top: 4px solid var(--lightGrey);
    border-radius: 0px;
    box-shadow: none;
    background: var(--white);
  }
  .post__createWrapper {
    width: 90vw;
  }

  .form-row__input {
    width: 90vw;
  }
}
</style>
