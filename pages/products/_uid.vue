<template>
  <div class="row">
    <div class="col-md-12 col-lg-8">
      <div class="section-container-spacer">
        <h1>{{$prismic.asText(document.data.title)}}</h1>
      </div>

      <div class="row section-container-spacer">
        <div class="col-xs-12 col-sm-6">
          <img
            class="img-responsive"
            :alt="document.data.main_image.alt"
            :src="document.data.main_image.url"
          />
        </div>
        <div class="col-xs-12 col-sm-6">
          <div v-html="$prismic.asHtml(document.data.description)"></div>
          <a
            v-if="document.data.status === 'selling'"
            :href="document.data.buylink.url"
            class="btn btn-primary btn-lg"
          >前往購買</a>
          <a
            v-else-if="document.data.status === 'out_of_stock'"
            disabled
            class="btn btn-primary btn-lg"
          >缺貨中</a>
          <a
            v-else-if="document.data.status === 'not_season'"
            disabled
            class="btn btn-primary btn-lg"
          >目前非產季</a>
        </div>
      </div>

      <div
        class="row section-container-spacer"
        v-for="(slice, index) in document.data.body"
        :key="index"
      >
        <div
          class="col-xs-12"
          v-if="slice.slice_type === 'text'"
          v-html="$prismic.asHtml(slice.primary.text)"
        ></div>
        <div class="col-xs-12" v-if="slice.slice_type === 'banner_with_caption'">
          <div
            :class="[`col-sm-${slice.primary.image_col_width}`]"
            v-if="slice.primary.layout === 'image_left' "
          >
            <img
              class="img-responsive"
              :alt="slice.primary.image_banner.alt"
              :src="slice.primary.image_banner.url"
            />
          </div>
          <div
            v-if="slice.primary.layout === 'image_left' "
            :class="[`col-sm-${12 - slice.primary.image_col_width}`]"
            v-html="$prismic.asHtml(slice.primary.description)"
          ></div>
          <div
            v-if="slice.primary.layout === 'image_right' "
            :class="[`col-sm-${12 - slice.primary.image_col_width}`]"
            v-html="$prismic.asHtml(slice.primary.description)"
          ></div>
          <div
            v-if="slice.primary.layout === 'image_right' "
            :class="[`col-sm-${slice.primary.image_col_width}`]"
          >
            <img
              class="img-responsive"
              :alt="slice.primary.image_banner.alt"
              :src="slice.primary.image_banner.url"
            />
          </div>
        </div>
        <div class="col-xs-12" v-if="slice.slice_type === 'image_gallery'">
          <div class="grid">
            <div class="gutter-sizer"></div>
            <div class="grid-sizer"></div>
            <div class="grid-item" v-for="(item, i ) in slice.items" :key="i">
              <img class="img-responsive" alt :src="item.gallery_image.url" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid">
      <div class="gutter-sizer"></div>
      <div class="grid-sizer"></div>
      <div class="grid-item"></div>
    </div>
  </div>
</template>

<script>
function getPage(prismic, uid, lang) {
  return prismic.api.getByUID("product", uid, {
    lang
  });
}

export default {
  async asyncData({ app, params }) {
    const lang = app.i18n.locale === "ja" ? "ja-jp" : "zh-tw";
    const document = await getPage(app.$prismic, params.uid, lang);
    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  components: {},
  async created() {
    const lang = this.$i18n.locale === "ja" ? "ja-jp" : "zh-tw";
    this.document = await getPage(this.$prismic, this.$route.params.uid, lang);
  },
  async mounted() {
    masonryBuild();
  }
};
</script>