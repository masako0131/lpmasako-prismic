<template>
  <div>
    <header class>
      <div class="navbar navbar-default visible-xs">
        <button type="button" class="navbar-toggle collapsed" @click.prevent="sidebar = !sidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <nuxt-link class="navbar-brand" :to="localePath('index', $i18n.locale)">La Pâtisserie Masako</nuxt-link>
      </div>

      <nav class="sidebar" :class="{open:sidebar}">
        <div class="navbar-collapse" :class="{open:sidebar}" id="navbar-collapse">
          <div class="site-header hidden-xs">
            <nuxt-link class="site-brand" :to="localePath('index', $i18n.locale)">
              <img class="img-responsive site-logo" alt src="/assets/logo-w-150.svg" />
              La Pâtisserie Masako
            </nuxt-link>
            <!-- <a class="site-brand" href="/index.html" title>
              <img class="img-responsive site-logo" alt src="/assets/logo-w-150.svg" />
              La Pâtisserie Masako
            </a>-->
            <p>{{ $t('slogan') }}</p>
          </div>
          <ul class="nav">
            <li>
              <nuxt-link :to="localePath('index', $i18n.locale)">{{ $t('home') }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('about', $i18n.locale)">{{ $t('about') }}</nuxt-link>
            </li>
            <!-- <li>
              <a href="/services.html" title>Services</a>
            </li>
            <li>
              <a href="/contact.html" title>Contact</a>
            </li>
            <li>
              <a href="/components.html" title>Components</a>
            </li>-->
          </ul>

          <nav class="nav-footer">
            <p>
              <nuxt-link v-if="$i18n.locale === 'zh'" :to="switchLocalePath('ja')">日本語</nuxt-link>
              <nuxt-link v-if="$i18n.locale === 'ja'" :to="switchLocalePath('zh')">繁體中文</nuxt-link>
            </p>

            <p class="nav-footer-social-buttons">
              <a class="fa-icon" href="https://www.instagram.com/patissiermasako" title>
                <i class="fa fa-instagram"></i>
              </a>
              <a class="fa-icon" href="https://www.facebook.com/la.patisserie.masako" title>
                <i class="fa fa-facebook"></i>
              </a>
              <a class="fa-icon" href="https://m.me/la.patisserie.masako" title>
                <i class="fa fa-comments"></i>
              </a>
            </p>

            <p>
              © Masako H. | Website created with
              <a
                href="http://www.mashup-template.com/"
                title="Create website with free html template"
              >Mashup Template</a>
            </p>
          </nav>
        </div>
      </nav>
    </header>
    <main class id="main-collapse">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "/main.85741bff.js"
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "/main.82cfd66e.css"
        }
      ]
    };
  },
  data() {
    return {
      sidebar: false
    };
  },
  watch: {
    $route() {
      this.sidebar = false;
    }
  },
  async mounted() {
    // const { data } = await this.$prismic.api.getSingle("home", {
    //   lang: "ja-jp"
    // });
    // this.data = data;
    //console.log("44", this.$i18n.locale);
    //navbarToggleSidebar();
    navActivePage();
  }
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
@media (max-width: 767px) {
  .col-sm-6 {
    margin-top: 20px;
  }
}
</style>