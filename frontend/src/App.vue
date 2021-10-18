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
  /* filters */
  --filterWhite: invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg)
    brightness(200%) contrast(100%);
  --filterLight: invert(97%) sepia(4%) saturate(138%) hue-rotate(200deg)
    brightness(98%) contrast(95%);
  --filterDark: invert(13%) sepia(6%) saturate(360%) hue-rotate(201deg)
    brightness(92%) contrast(85%);
  --filterDarkgrey: invert(22%) sepia(6%) saturate(192%) hue-rotate(227deg)
    brightness(90%) contrast(88%);
  --filterRed: invert(37%) sepia(92%) saturate(1166%) hue-rotate(327deg)
    brightness(90%) contrast(80%);
  --filterBlue: invert(9%) sepia(68%) saturate(1989%) hue-rotate(204deg)
    brightness(93%) contrast(99%);
  --filterGreenLight: invert(53%) sepia(13%) saturate(841%) hue-rotate(77deg)
    brightness(101%) contrast(86%);
  --filterGreenDark: invert(19%) sepia(16%) saturate(1678%) hue-rotate(113deg)
    brightness(93%) contrast(98%);
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
