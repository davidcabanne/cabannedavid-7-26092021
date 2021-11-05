<template>
  <div class="card__body">
    <div class="card">
      <div class="card__loginLogo">
        <img src="../../images/logo-greenLight.svg" />
      </div>
      <h1 class="card__title">
        Hey<span v-if="username" class="card__title--username">{{
          username
        }}</span
        >,<br />
        <span class="card_title--accent">Signup</span> Now.
      </h1>
      <p class="card__subtitle">
        Tu as déjà un compte /
        <span class="card__cta"
          ><router-link to="/">Se connecter</router-link></span
        >
      </p>
      <div class="form-row">
        <input
          v-model="username"
          class="form-row__input"
          type="text"
          placeholder="Username"
          required
        />
      </div>
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
      <div class="form-row form-row__required" v-if="!checkInputs">
        Tous les champs sont recquis !
      </div>
      <div class="form-row">
        <input
          @click="signUp()"
          class="button"
          :class="{ 'button--disabled': !signUp }"
          type="submit"
          value="Créer mon compte"
          aria-label="sign-up"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Signup",
  data: function() {
    return {
      username: "",
      email: "",
      password: "",
      checkInputs: true,
    };
  },
  methods: {
    signUp: async function() {
      console.log("Signing-up !");

      if (this.username === "" || this.email === "" || this.password === "") {
        this.checkInputs = false;

        return;
      }

      const API_SERVER = "http://localhost:3000";

      try {
        const response = await axios.post(API_SERVER + `/users/signup`, {
          username: this.username,
          email: this.email,
          password: this.password,
        });

        console.log(response);
        console.log(
          `User: ${response.data.username}, email: ${response.data.email} is SIGNED-UP !`
        );

        this.$router.push({ name: "Login" });
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
}

.form-row__input::placeholder {
  color: var(--greenLight);
  opacity: 0.5;
}

.form-row__required {
  color: var(--red);
  font-weight: 600;
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

.card__title--username {
  margin-left: var(--spaceSml);
  color: var(--greenLight);
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
