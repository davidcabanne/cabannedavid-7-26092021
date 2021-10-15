<template>
  <div class="card__body">
    <div class="card">
      <div class="card__loginLogo">
        <img src="../../images/logo-greenLight.svg" />
      </div>
      <h1 class="card__title">
        Hey, {{ username }} <br />
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
        const login = await axios.post(API_SERVER + `/users/login`, {
          email: this.email,
          password: this.password,
        });
        console.log(login);

        localStorage.setItem("token", login.data.token);

        localStorage.setItem("userId", login.data.userId);

        this.$router.push({ name: "Home" });
      } catch (error) {
        this.errors.push(error);
      }
    },
  },
};
</script>

<style scoped>
.card__body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
