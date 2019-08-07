<template>
  <q-layout view="hHr lpR ffr">
    <q-header v-bind:elevated="pageScrolled" class="header bg-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="logo-container">
            <a href="https://www.yugabyte.com" target="_blank" rel="noopener">
              <img id="yb-logo-symbol" width="240" height="40" alt="YugaByte DB Logo" src="../assets/ybdocs-color.png" />
            </a>
          </div>
          <!-- <div class="logo">
            <a href="https://www.yugabyte.com/" class="navbar-brand" target="_blank" rel="noopener">
              <div class="nav-logo scrolled"></div>
            </a>
          </div> -->
        </q-toolbar-title>
        <div id="yb-main-navbar">
          <a href="https://docs.yugabyte.com/" class="yb-nav-links" target="_blank" rel="noopener" style="color: #202951">
            <q-btn class="yb-nav-links" flat label="Docs" color="#202951"/>
          </a>
          <a href="https://blog.yugabyte.com/" class="yb-nav-links" target="_blank" rel="noopener" style="color: #202951">
            <q-btn class="yb-nav-links" flat label="Blog" color="#202951"/>
          </a>
          <a href="/" class="yb-nav-links" rel="noopener" style="color: #ff4200">
            <q-btn class="yb-nav-links" flat label="Download" color="#202951"/>
          </a>
        </div>
        <q-btn id="side-menu-btn" aria-label="Side Menu button" flat round icon="menu" @click="rightDrawerOpen = !rightDrawerOpen" />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <side-menu></side-menu>
    </q-drawer>

    <q-page-container id="page-content-container">
      <router-view />
    </q-page-container>
      <q-footer>
        <footer class="footer">
          <a href="https://www.yugabyte.com/slack" class="help-footer-btn">
            <img width="28" src="../assets/slack-mark-white.svg" />
            <div class="cta-community-link">Join us on Slack</div>
          </a>
          <div class="container-fluid">
            <ul class="footer-nav">
              <li class="footer-items" >
                <div class="logo-white">
                  <img width="50px" height="30px" alt="YugaByte DB logo" src="../assets/ybsymbol-white.svg" />
                  <div class="copyright">
                    <div style="margin-bottom: 3px">© 2019 YugaByte, Inc.</div>
                    <a href="https://www.yugabyte.com/privacy-policy/">Privacy Policy</a>
                  </div>
                </div>
              </li>
              <li class="footer-items" data-footer="community-links">
                <a target="_blank" class="footer-link" href="https://www.yugabyte.com/about" rel="noopener">About</a>
              </li>
              <li class="footer-items" data-footer="community-links">
                <a target="_blank" class="footer-link" href="https://www.yugabyte.com/yugabytedb" rel="noopener">Open Source</a>
              </li>
              <li class="footer-items" data-footer="community-links">
                <a target="_blank" class="footer-link" href="https://github.com/YugaByte/yugabyte-db" rel="noopener">GitHub</a>
              </li>
              <li class="footer-items" data-footer="address">
                <div class="footer-title">Address</div>
                <a href="https://goo.gl/maps/SJ7TCYKbA6jezdfM6" target="_blank" rel="noopener" id="office-map">
                  771 Vaqueros Ave<br class="hidden-xs hidden-sm">
                  Sunnyvale, CA 94085 <br class="hidden-xs hidden-sm">
                  United States
                </a>
              </li>
              <li class="footer-items" >
                <div class="footer-title">Follow Us</div>
                <div class="footer-social">
                  <a target="_blank" rel="noopener" href="https://github.com/yugabyte/yugabyte-db" id="github"><img src="../assets/github-small.svg" alt="Github link"></a>
                  <a target="_blank" rel="noopener" href="https://www.twitter.com/yugabyte" id="twitter"><img src="../assets/twitter-small.svg" alt="Twitter link"></a>
                  <a target="_blank" rel="noopener" href="https://www.linkedin.com/company/yugabyte" id="linkedin"><img src="../assets/linkedin-small.svg" alt="LinkedIn link"></a>
                </div>
              </li>
            </ul>
          </div>
        </footer>
      </q-footer>
  </q-layout>
</template>

<script>
import SideMenu from './SideMenu'

export default {
  name: 'MainLayout',
  data () {
    return {
      rightDrawerOpen: false,
      pageScrolled: false,
      hoverResourcesLink: false,
      navLinks: [false, false, false, false]
    }
  },
  methods: {
    handleScroll: function () {
      this.pageScrolled = window.scrollY > 0 || window.pageYOffset !== 0
    },
    handleResizeWidth: function (e) {
      if (e.target.outerWidth > 650) {
        this.rightDrawerOpen = false
      }
    },
    handleHoverResources: function () {
      this.hoverResourcesLink = true
    },
    handleHideMenu: function () {
      this.hoverResourcesLink = false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResizeWidth)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResizeWidth)
  },
  components: {
    'side-menu': SideMenu
  }
}
</script>

<style>
body {
  background-color: #fff;
  min-height: 100%;
}
body, input {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}
pre, code {
  font-family: 'Inconsolata', 'Courier New', 'Courier', monospace;
}
.header {
  color: #202951;
  height: 75px;
  border-bottom: 1px solid #ccc;
}
.nav-container {
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
}
.logo {
  width: 100%;
  line-height: inherit;
  background-repeat: no-repeat;
  background-position: left 23px;
  background-size: auto 33px;
  height: 75px;
  margin-left: 19px;
}
#yb-main-navbar {
  display: block;
}
.logo-container {
  padding: 17px 5px 17px 60px;
}
.logo a {
  height: 75px;
  padding: 0;
  width: 180px;
  margin-right: 0;
}
#side-menu-btn {
  margin-right: 15px;
  margin-top: -3px;
  display: none;
}

.side-menu-navlink {
  display: block;
  text-align: center;
}

@media (max-width: 650px) {
  #side-menu-btn {
    display: block;
  }
  #yb-main-navbar {
    display: none;
  }
  .logo-container {
    padding: 17px 5px 17px 20px;
  }
}
@media (max-width: 500px) {
  #yb-logo-symbol {
    margin: 15px 0;
  }
  .logo-container {
    padding: 7px 5px 7px 10px;
  }
}
#page-content-container > * {
  display: flex;
  height: 100%;
  flex-flow: column;
}
a {
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
}

.content {
  text-align: center;
  width: 100%;
  padding-bottom: 180px;
  padding-left: 30px;
  padding-right: 30px;
  flex: 1 1 auto;
  padding-top: 30px;
  box-shadow: 0 0 30px 0 rgba(57, 84, 109, 0.14);
}
.hero-overview {
  padding: 30px 0 20px;
}
.overview-container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  text-align: left;
}
.overview-container p {
  color: #322965;
}
.q-panel > div {
  height: 100%;
  min-width: 100%;
  width: fit-content;
}
.bg-form {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 60px;
}
.service-options {
  display: flex;
  justify-content: center;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .overview-container, .service-options {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .overview-container, .service-options {
      width: 850px;
  }
}
@media (min-width: 1200px) {
  .overview-container, .service-options {
    width: 1050px;
  }
}

.overview-container h1 {
  font-size: 50px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  line-height: 70px;
}
h3.overview-statement {
  color: #ff4200;
  font-size: 18px !important;
  line-height: 1.78 !important;
  text-transform: uppercase;
  padding: 0;
  letter-spacing: 2px;
  font-weight: 400;
  margin: 0;
}
.os-selection-container {
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 120px;
  padding-right: 120px;
  margin-bottom: 60px;
}

/* Floating footer tab */
.footer .help-footer-btn {
  position: fixed;
  bottom: 0;
  right: 60px;
  height: 40px;
  width: 165px;
  padding: 5px 10px;
  color: #fff;
  border-radius: 4px 4px 0 0;
  font-size: 14px;
  background-color: #f75821;
  cursor: pointer;
  z-index: 10;
  text-decoration: none;
}

.help-footer-btn .cta-community-link {
  display: inline-block;
  margin-left: 5px;
  vertical-align: 9px;
}

@media (max-width: 850px) {
  .os-selection-container {
    padding-left: 30px;
    padding-right: 30px;
  }
}
#dropdown-options-container {
  max-width: 500px;
  margin-bottom: 30px;
  list-style: none;
  padding-left: 0;
  display: none;
}
#dropdown-options-container li {
  margin-bottom: 15px;
}
.service-tabs-container {
  width: 100%;
}
#cloud-cluster-content .cloud-selection-container {
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  margin: 40px auto;
  padding-bottom: 10px;
  padding-top: 10px;
}
@media (max-width: 1150px) {
  #cloud-cluster-content .cloud-selection-container {
    overflow-x: scroll;
  }
}
@media (max-width: 632px) {
  #dropdown-options-container {
    display: block;
  }
  .os-selection-container, #cloud-cluster-content .cloud-selection-container {
    display: none;
  }
  .service-tabs-container {
    display: none;
  }
  .footer .help-footer-btn {
    width: 50px;
  }
  .help-footer-btn .cta-community-link {
    display: none;
  }
}
.os-install-content {
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
}

/* YBHeader styles */
h3 {
  font-size: 19px;
  text-transform: uppercase;
  color: #f75821;
  margin: 0 0 10px;
  line-height: 1.2;
  font-weight: 700;
}

h3 img {
  max-width: 40px;
  max-height: 40px;
  vertical-align: middle;
  margin-right: 10px;
}
</style>
