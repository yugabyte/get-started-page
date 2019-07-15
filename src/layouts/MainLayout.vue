<template>
  <q-layout view="hHr lpR ffr">
    <q-header v-bind:elevated="pageScrolled" class="header bg-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="logo-container">
            <a href="https://www.yugabyte.com">
              <img id="yb-logo-symbol" width="60" height="60" src="../assets/ybsymbol-original.png" />
              <img id="yb-logo-full" width="240" height="40" src="../assets/ybdocs-color.png" />
            </a>
          </div>
          <!-- <div class="logo">
            <a href="https://www.yugabyte.com/" class="navbar-brand">
              <div class="nav-logo scrolled"></div>
            </a>
          </div> -->
        </q-toolbar-title>
        <div id="yb-main-navbar">
          <a href="https://docs.yugabyte.com/" class="yb-nav-links" target="_blank" style="color: #202951">
            <q-btn class="yb-nav-links" flat label="Docs" color="#202951"/>
          </a>
          <q-btn flat label="Resources" color="#202951" @mouseenter="handleHoverResources">
            <q-menu :value="hoverResourcesLink" @mouseleave="handleHideMenu">
              <q-list style="min-width: 100px">
                <q-item clickable>
                  <a title="Docs" class="yb-nav-links" target="_blank" href="https://github.com/YugaByte/yugabyte-db">
                    <q-item-section>Github</q-item-section>
                  </a>
                </q-item>
                <q-item clickable>
                  <a title="Forum" class="yb-nav-links" target="_blank" href="https://forum.yugabyte.com/">
                    <q-item-section>Forum</q-item-section>
                  </a>
                </q-item>
                <q-item clickable>
                  <a title="Slack" class="yb-nav-links" target="_blank" href="http://yugabyte.com/slack">
                    <q-item-section>Slack</q-item-section>
                  </a>
                </q-item>
                <q-item clickable>
                  <a title="Blog" class="yb-nav-links" target="_blank" href="https://stackoverflow.com/questions/tagged/yugabyte-db">
                    <q-item-section>Stack Overflow</q-item-section>
                  </a>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <a href="https://blog.yugabyte.com/" class="yb-nav-links" target="_blank" style="color: #202951">
            <q-btn class="yb-nav-links" flat label="Blog" color="#202951"/>
          </a>
        </div>
        <q-btn id="side-menu-btn" flat round icon="menu" @click="rightDrawerOpen = !rightDrawerOpen" />
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
          <div class="container-fluid">
            <ul class="footer-nav">
              <li class="footer-items" >
                <div class="logo-white">
                  <img width="150px" height="30px" alt="YugabyteDB logo" src="../assets/yb-logo-white-horizontal.svg" />
                </div>
                <div class="copyright">
                  © YugaByte, Inc.
                </div>
              </li>
              <li class="footer-items" data-footer="community-links">
                <a target="_blank" class="footer-link" href="https://www.yugabyte.com/slack" id="slack-link" rel="noreferrer">Slack</a>
              </li>
              <li class="footer-items" data-footer="community-links">
                <a target="_blank" class="footer-link" href="https://stackoverflow.com/questions/tagged/yugabyte-db" id="stackoverflow-link" rel="noreferrer">StackOverflow</a>
              </li>
              <li class="footer-items" data-footer="community-links">
                <a target="_blank" class="footer-link" href="https://github.com/YugaByte/yugabyte-db" id="github-link" rel="noreferrer">GitHub</a>
              </li>
              <li class="footer-items" data-footer="address">
                <div class="footer-title">Address</div>
                <a href="https://goo.gl/maps/SJ7TCYKbA6jezdfM6" target="_blank" rel="noreferrer" id="office-map">
                  YugaByte, Inc<br class="hidden-xs hidden-sm">
                  771 Vaqueros Ave<br class="hidden-xs hidden-sm">
                  Sunnyvale, CA 94085
                </a>
              </li>
              <li class="footer-items" data-footer="contact-us">
                <div class="footer-title">Contact Us</div>
                <a href="mailto:hello@yugabyte.com">hello@yugabyte.com</a>
              </li>
              <li class="footer-items" >
                <div class="footer-title">Follow Us</div>
                <div class="footer-social">
                  <a target="_blank" rel="noreferrer" href="https://github.com/yugabyte/yugabyte-db" id="github"><img src="../assets/github-small.svg" alt="Github link"></a>
                  <a target="_blank" rel="noreferrer" href="https://www.twitter.com/yugabyte" id="twitter"><img src="../assets/twitter-small.svg" alt="Twitter link"></a>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/yugabyte" id="linkedin"><img src="../assets/linkedin-small.svg" alt="LinkedIn link"></a>
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
    handleHoverResources: function () {
      this.hoverResourcesLink = true
    },
    handleHideMenu: function () {
      this.hoverResourcesLink = false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  components: {
    'side-menu': SideMenu
  }
}
</script>

<style>
body {
  background-color: #fff;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  min-height: 100%;
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
#yb-logo-full, #yb-main-navbar {
  display: block;
}
#yb-logo-symbol, #side-menu-btn {
  display: none;
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
#side-menu-btn {
  margin-right: 15px;
}
.footer {
  text-align: left;
  width: 100%;
  font-size: 13px;
  line-height: 1.3;
  color: #F7F8F9;
  background: #202951;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px 0;
  font-size: 14px;
  color: #fff;
}
.footer .copyright {
  padding: 0;
  margin: 0 60px 0 42px;
  color: #7A82AC;
  font-weight: 300;
  line-height: 18px;
  font-size: 13px;
}
.footer .logo-white {
  padding-top: 10px;
}
.footer-nav {
  margin: 0;
  padding: 0;
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.footer-nav li.footer-items {
  padding: 10px 0;
}
.footer-nav a {
  color: #fff;
  display: block;
  -webkit-transition: color .3s;
  transition: color .3s;
}
.footer-link {
  color: #fff;
  display: block;
  -webkit-transition: color .3s;
  transition: color .3s;
  font-weight: 500;
  text-transform: uppercase;
}
@media (min-width: 1200px) {
  .container-fluid {
      max-width: 1140px;
  }
}
@media (max-width: 1199.98px) {
  .footer-items[data-footer="address"] {
    display: none;
  }
  .container-fluid {
    max-width: 97.5%;
  }
}
@media (max-width: 880px) {
  .footer-items[data-footer="contact-us"] {
    display: none;
  }
}
@media (max-width: 650px) {
  .footer-items[data-footer="community-links"] {
    display: none;
  }
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
  #yb-logo-full {
    display: none;
  }
  #yb-logo-symbol {
    display: block;
  }
  .logo-container {
    padding: 7px 5px 7px 10px;
  }
  .footer-items[data-footer="address"], .footer-items[data-footer="contact-us"] {
    display: none;
  }
}

.footer .container-fluid {
  width: 100%;
  padding: 0 30px;
  margin-right: auto;
  margin-left: auto;
}
.footer-title, .footer-social {
  text-transform: uppercase;
}
.footer-title {
  padding-bottom: 8px;
  margin-bottom: 15px;
  border-bottom: 1px solid #c72c48;
  color: #fff;
}
.footer-social > a {
  display: inline-block;
  padding-right: 15px;
}
</style>
