<template>
  <div>
    <header class>
      <div class="navbar navbar-default visible-xs">
        <button type="button" class="navbar-toggle collapsed">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="/index.html" class="navbar-brand">La Pâtisserie Masako</a>
      </div>

      <nav class="sidebar">
        <div class="navbar-collapse" id="navbar-collapse">
          <div class="site-header hidden-xs">
            <a class="site-brand" href="/index.html" title>
              <img class="img-responsive site-logo" alt src="/assets/logo-w-150.svg" />
              La Pâtisserie Masako
            </a>
            <p>神戶·巴黎·台北 - 串起城市記憶的日系法式甜點</p>
          </div>
          <ul class="nav">
            <li>
              <a href="/index.html" title>Home</a>
            </li>
            <li>
              <a href="/about.html" title>About</a>
            </li>
            <li>
              <a href="/services.html" title>Services</a>
            </li>
            <li>
              <a href="/contact.html" title>Contact</a>
            </li>
            <li>
              <a href="/components.html" title>Components</a>
            </li>
          </ul>

          <nav class="nav-footer">
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
  // data() {
  //   return {
  //     data: {}
  //   };
  // },
  async mounted() {
    // const { data } = await this.$prismic.api.getSingle("home", {
    //   lang: "ja-jp"
    // });
    // this.data = data;
    navbarToggleSidebar();
    navActivePage();
  }
};
</script>