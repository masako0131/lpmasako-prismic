<template>
  <div class="hero-full-wrapper">
    <!-- {{document.data.body[0].items}} -->
    <div class="grid">
      <div class="gutter-sizer"></div>
      <div class="grid-sizer"></div>

      <div v-for="(item, i) in document.data.body[0].items" :key="i" class="grid-item">
        <img class="img-responsive" alt :src="item.gallery_image.url" />
        <nuxt-link
          :to="localePath({ name: 'products-uid', params: { uid: item.productid.uid } }, $i18n.locale)"
          class="project-description"
        >
          <div class="project-text-holder">
            <div class="project-text-inner">
              <h3>{{$prismic.asText(item.image_captions)}}</h3>
              <p>{{ $t('homepage.more') }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>

      <!-- <div class="grid-item">
        <img class="img-responsive" alt src="/assets/images/img-05.jpg" />
        <a href="./project.html" class="project-description">
          <div class="project-text-holder">
            <div class="project-text-inner">
              <h3>Vivamus vestibulum</h3>
              <p>Discover more</p>
            </div>
          </div>
        </a>
      </div>

      <div class="grid-item">
        <img class="img-responsive" alt src="/assets/images/img-13.jpg" />
        <a href="./project.html" class="project-description">
          <div class="project-text-holder">
            <div class="project-text-inner">
              <h3>Vivamus vestibulum</h3>
              <p>Discover more</p>
            </div>
          </div>
        </a>
      </div>
      <div class="grid-item">
        <img class="img-responsive" alt src="/assets/images/img-04.jpg" />
        <a href="./project.html" class="project-description">
          <div class="project-text-holder">
            <div class="project-text-inner">
              <h3>Vivamus vestibulum</h3>
              <p>Discover more</p>
            </div>
          </div>
        </a>
      </div>

      <div class="grid-item">
        <img class="img-responsive" alt src="/assets/images/img-07.jpg" />
        <a href="./project.html" class="project-description">
          <div class="project-text-holder">
            <div class="project-text-inner">
              <h3>Vivamus vestibulum</h3>
              <p>Discover more</p>
            </div>
          </div>
        </a>
      </div>

      <div class="grid-item">
        <img class="img-responsive" alt src="/assets/images/img-11.jpg" />
        <a href="./project.html" class="project-description">
          <div class="project-text-holder">
            <div class="project-text-inner">
              <h3>Vivamus vestibulum</h3>
              <p>Discover more</p>
            </div>
          </div>
        </a>
      </div>

      <div class="grid-item">
        <img class="img-responsive" alt src="/assets/images/img-10.jpg" />
        <a href="./project.html" class="project-description">
          <div class="project-text-holder">
            <div class="project-text-inner">
              <h3>Vivamus vestibulum</h3>
              <p>Discover more</p>
            </div>
          </div>
        </a>
      </div>
      <div class="grid-item">
        <img class="img-responsive" alt src="/assets/images/img-03.jpg" />
        <a href="./project.html" class="project-description">
          <div class="project-text-holder">
            <div class="project-text-inner">
              <h3>Vivamus vestibulum</h3>
              <p>Discover more</p>
            </div>
          </div>
        </a>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const lang = app.i18n.locale === "ja" ? "ja-jp" : "zh-tw";
    const document = await app.$prismic.api.getSingle("home", { lang });
    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  components: {},
  async mounted() {
    // const lang = this.$i18n.locale === "ja" ? "ja-jp" : "zh-tw";
    // let document = await this.$prismic.api.getSingle("home", { lang });
    // console.log("document", document);
    masonryBuild();
  }
};
</script>