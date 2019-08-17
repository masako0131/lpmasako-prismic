<template>
  <div class="row">
    <div class="col-xs-12 col-md-8">
      <div class="section-container-spacer">
        <h1>{{$prismic.asText(document.data.title)}}</h1>
        <div v-html="$prismic.asHtml(document.data.description)"></div>
      </div>

      <div class="section-container-spacer">
        <p>
          <img class="img-responsive" alt src="/assets/images/img-12.jpg" />
        </p>
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <p>
              <img class="img-responsive" alt src="/assets/images/img-13.jpg" />
            </p>
          </div>
          <div class="col-xs-12 col-md-6">
            <p>
              <img class="img-responsive" alt src="/assets/images/img-14.jpg" />
            </p>
          </div>
        </div>
      </div>

      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{document}}
        <!-- {{$prismic.asHtml(document.data)}} -->
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    const lang = app.i18n.locale === "ja" ? "ja-jp" : "zh-tw";
    const document = await app.$prismic.api.getByUID("product", params.uid, {
      lang
    });
    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
    // const lang = app.i18n.locale === "ja" ? "ja-jp" : "zh-tw";
    // const document = await app.$prismic.api.getSingle("home", { lang });
    // if (document) {
    //   return { document };
    // } else {
    //   error({ statusCode: 404, message: "Page not found" });
    // }
  },
  components: {},
  async mounted() {
    // const lang = this.$i18n.locale === "ja" ? "ja-jp" : "zh-tw";
    // let document = await this.$prismic.api.getSingle("home", { lang });
    // console.log("document", document);
    //masonryBuild();
  }
};
</script>