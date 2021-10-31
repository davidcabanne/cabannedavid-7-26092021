<template>
  <router-view />
</template>

<style lang="scss">
:root {
  --white: #ffffff;
  --light: #efeff3;
  --lightGrey: #f2f2f2;
  --MedGrey: #bcbcbc;
  --dark: #2e2e30;
  --darkgrey: #3d3c3e;
  --red: #d1515a;
  --blue: #091f43;
  --greenLight: #6d9773;
  --greenPrimary: #0c3b2e;
  --beige: #bb8a52;
  --yellow: #ffba00;
  /* font-sizes: */
  --body-firstFont: 16px;
  --body-secondFont: 20px;
  --headingFirst: 25px;
  --headingSecond: 31.25px;
  --headingThird: 39.06px;
  --headingFourth: 48.83px;
  --largeFirst: 61.04px;
  --largeSecond: 76.29px;
  /* margin & padding */
  --spaceSml: 15px;
  --spaceMed: 30px;
  --spaceLrg: 60px;
  --maxWidth: 540px;
  /* icon size */
  --iconSize: 20px;
  /* post img */
  --imgMedium: 300px;
  --imgLarge: 400px;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus {
  outline: none;
  opacity: 0.5;
}

a {
  text-decoration: none;
  color: var(--greenLight);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Roboto", Helvetica, sans-serif;
  font-size: var(--body-firstFont);
  overflow-x: hidden;
  background: var(--light);
  width: 100vw;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
