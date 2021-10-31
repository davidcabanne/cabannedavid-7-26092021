<template>
  <div class="nav__container">
    <nav>
      <router-link to="/home"
        ><div href="index.html" class="nav__logocontainer"></div
      ></router-link>

      <div class="nav__menucontainer">
        <div class="nav__responsive">
          <ul class="nav__iconlist nav__iconlist--mobile">
            <li>
              <router-link
                @click="scrollToTop()"
                to="/home"
                class="icon__home icon__transition icon__mobile"
              ></router-link>
            </li>
            <li>
              <router-link
                to="/search"
                class="icon__search icon__transition"
              ></router-link>
            </li>
            <li>
              <router-link
                to="/home"
                class="icon__message icon__transition"
              ></router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'Profile', params: { id: userId } }"
                class="icon__profile icon__transition"
              ></router-link>
            </li>
          </ul>
        </div>
        <div class="nav__static">
          <ul class="nav__iconlist">
            <li>
              <router-link
                to="/home"
                class="icon__notifications icon__transition"
              ></router-link>
            </li>
            <li>
              <router-link
                @click="logoutUser()"
                to="/"
                class="icon__logout icon__transition"
              ></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    const userId = localStorage.getItem("userId");

    return {
      userId: userId,
    };
  },
  methods: {
    logoutUser: function() {
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
    },
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
/* NAV STYLING */
.nav__container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80px;
  background: var(--white);
  /* border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px; */
  /* box-shadow: 5px 5px 16px 0 rgba(0, 0, 0, 0.15),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.1); */
  z-index: 10;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
}
.nav__logocontainer {
  height: 60px;
  width: 200px;
  background-image: url(../../images/logo-greenLight.svg);
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 0.2s ease-in-out;
}
.nav__logocontainer:hover {
  background-image: url(../../images/logo-light.svg);
}

.nav__menucontainer {
  display: flex;
}

.nav__static {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: var(--spaceMed);
  background: var(--greenLight);
  padding: 15px 25px;
  border-radius: var(--spaceMed);
}
.nav__static li {
  margin-right: var(--spaceSml);
  filter: var(--filterWhite);
}
.nav__static li:last-child {
  margin-right: 0;
}

.nav__responsive {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav__responsive li {
  margin-right: var(--spaceMed);
  cursor: pointer;
}
.nav__responsive li:last-child {
  margin-right: 0;
}

.nav__iconlist {
  display: flex;
}

.nav__iconlist li {
  height: var(--iconSize);
  width: var(--iconSize);
  display: flex;
  justify-self: center;
  align-items: center;
}

/* ICONS SETTINGS starts here */
.nav__responsive li {
  filter: var(--filterDarkgrey);
}
.icon__transition {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: var(--iconSize) var(--iconSize);
  transition: background-image 0.2s ease-in-out;
}

.icon__home {
  background-image: url(../../images/icons/icon-linear/icon-home.svg);
}
.icon__search {
  width: 100%;
  height: 100%;
  background-image: url(../../images/icons/icon-linear/icon-search-normal-1.svg);
}
.icon__message {
  background-image: url(../../images/icons/icon-linear/icon-sms.svg);
}
.icon__profile {
  background-image: url(../../images/icons/icon-linear/icon-profile.svg);
}
.icon__notifications {
  background-image: url(../../images/icons/icon-linear/icon-notification_white.svg);
}
.icon__logout {
  background-image: url(../../images/icons/icon-linear/icon-logout_white.svg);
}
.icon__home:hover,
.icon__home.router-link-active,
.icon__home.router-link-exact-active {
  background-image: url(../../images/icons/icon-bold/home-1.svg);
}
.icon__search:hover {
  background-image: url(../../images/icons/icon-bold/search-normal-1.svg);
}
.icon__message:hover {
  background-image: url(../../images/icons/icon-bold/sms.svg);
}
.icon__profile:hover,
.icon__profile.router-link-active,
.icon__profile.router-link-exact-active {
  background-image: url(../../images/icons/icon-bold/profile-add.svg);
}
.icon__profile.router-link-active,
.icon__profile.router-link-exact-active {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
.icon__profile.router-link-active:hover,
.icon__profile.router-link-exact-active:hover {
  opacity: 0.5;
}
.icon__notifications:hover {
  background-image: url(../../images/icons/icon-bold/notification_white.svg);
}
.icon__logout:hover {
  background-image: url(../../images/icons/icon-bold/logout_white.svg);
}
/* ICONS SETTINGS ends here */

.icon__mobile {
  display: none;
}

@media screen and (min-width: 768px) {
  /* Hover stylings for desktop*/
}

@media screen and (max-width: 768px) {
  /* RESPONSIVE NAV BUILD starts here */
  .icon__mobile {
    display: block;
  }
  .nav__responsive {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--light);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    overflow: hidden;
    background: var(--light);
    /* backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); */
    /* background-color: rgba(239, 239, 243, 0.3); */
    /* border: 1px solid rgba(255, 255, 255, 0.18); */
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    // z-index: 9999;
  }

  .nav__responsive ul {
    width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav__iconlist--mobile li {
    margin-right: 0;
    cursor: pointer;
    z-index: 99999;
  }
}
</style>
