<template>
  <div
    class="homepage__onLoad"
    :class="{ 'homepage__onLoad--active': loginAnimation }"
  >
    <div
      class="homepage__onLoad--container"
      :class="{ 'homepage__onLoad--container--active': loginAnimation }"
    >
      <div
        class="homepage__onLoad--msg"
        :class="{ 'homepage__onLoad--msg--active': loginAnimation }"
      >
        Hello,<br />
        {{ loggedUsername }}!
      </div>
    </div>
  </div>
  <div class="card__body">
    <div class="card">
      <div class="card__loginLogo">
        <img src="../../images/logo-greenLight.svg" />
      </div>
      <h1 class="card__title">
        Hey,<br />
        <span class="card_title--accent">Login</span> Now.
      </h1>
      <p class="card__subtitle">
        Tu n'as pas encore de compte /
        <span class="card__cta"
          ><router-link to="/signup">Créer un compte</router-link></span
        >
      </p>
      <div class="form-row">
        <input
          v-model="email"
          class="form-row__input"
          type="text"
          placeholder="Adresse mail"
          required
        />
      </div>
      <div class="form-row">
        <input
          v-model="password"
          class="form-row__input"
          type="password"
          placeholder="Mot de passe"
          required
        />
      </div>

      <div class="form-row">
        <button
          @click="loginUser()"
          class="button"
          :class="{ 'button--disabled': !checkInputs }"
        >
          <span>Connexion</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      loggedUsername: "",
      loginAnimation: false,
    };
  },
  computed: {
    checkInputs: function() {
      if (this.email != "" && this.password != "") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    loginUser: async function() {
      console.log("loggin-in");
      const API_SERVER = "http://localhost:3000";
      try {
        const response = await axios.post(API_SERVER + `/users/login`, {
          email: this.email,
          password: this.password,
        });
        console.log(response);

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("username", response.data.username);

        const getUser = await localStorage.getItem("username");
        const splittedUser = getUser.split(" ");
        this.loggedUsername = splittedUser[0];

        this.loginAnimation = true;

        setTimeout(() => this.$router.push({ path: "Home" }), 3000);
      } catch (error) {
        this.errors.push(error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.homepage__onLoad {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: -1;
}
.homepage__onLoad--active {
  animation: slidesIn 1s forwards ease-in-out;
}
@keyframes slidesIn {
  0% {
    background: transparent;
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: -1;
    opacity: 0;
  }
  99% {
    opacity: 1;
    overflow-x: hidden;
    overflow-y: hidden;
    background: var(--greenLight);
  }
  100% {
    opacity: 1;
    overflow-x: hidden;
    overflow-y: visible;
    background: var(--greenLight);
    z-index: 9999;
  }
}

.homepage__onLoad--container {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(0px) rotate(10deg);
}

.homepage__onLoad--container--active {
  animation: fadesIn 2s forwards cubic-bezier(0.68, -0.55, 0.27, 1.55);
  animation-delay: 1s;
}

@keyframes fadesIn {
  0% {
    transform: translateY(0px) rotate(10deg);
  }
  50% {
    transform: translateY(-50px);
  }
  75% {
    transform: translateY(100px) rotate(-5deg);
  }
  100% {
    transform: translateY(300px) rotate(0deg);
  }
}

.homepage__onLoad--msg {
  width: 90vw;
  font-size: 50px;
  font-weight: 900;
  text-align: center;
  color: transparent;
}

.homepage__onLoad--msg--active {
  color: transparent;
  animation: colorIn 1.5s forwards;
  animation-delay: 1s;
}
@keyframes colorIn {
  0% {
    color: transparent;
  }
  20% {
    color: transparent;
  }
  40% {
    color: var(--white);
  }
  80% {
    color: var(--white);
  }
  100% {
    color: var(--greenLight);
  }
}

.card__body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background: var(--white);
}
.card__loginLogo {
  width: 70vw;
  max-width: 450px;
  margin-bottom: var(--spaceMed);
}

.form-row {
  display: flex;
  margin-bottom: 20px;
}

.form-row:last-child {
  margin-bottom: 0px;
}

.form-row__input {
  padding: var(--spaceSml);
  border: none;
  border-radius: 8px;
  background: var(--lightGrey);
  font-weight: 500;
  font-size: var(--body-firstFont);
  flex: 1;
  min-width: 100px;
  color: black;
  border: 2px solid transparent;
}

.form-row__input::placeholder {
  color: var(--greenLight);
  opacity: 0.5;
}

.form-row__input:focus {
  border: 2px solid var(--greenLight);
}

.card {
  max-width: 90vw;
  width: 540px;
  background: white;
  border-radius: 16px;
  padding: 32px;
}
.card__title {
  color: var(--darkgrey);
  font-size: var(--headingThird);
  font-weight: 900;
  margin-bottom: var(--spaceSml);
  opacity: 0.9;
}
.card__subtitle {
  color: var(--MedGrey);
  font-size: 15px;
  font-weight: 500;
  margin-bottom: var(--spaceLrg);
}

.button {
  background: var(--greenLight);
  color: white;
  border-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  width: 100%;
  padding: 16px;
  transition: 0.3s background-color;
}
.card__cta {
  color: var(--greenLight);
  font-weight: 800;
  transition: opacity 0.3s ease-in-out;
}
.card__cta:hover {
  cursor: pointer;
  opacity: 0.5;
}
.button:hover {
  cursor: pointer;
  background: var(--greenPrimary);
}
.button--disabled {
  background: #cecece;
  color: #ececec;
}
.button--disabled:hover {
  cursor: not-allowed;
  background: #cecece;
}
</style>
