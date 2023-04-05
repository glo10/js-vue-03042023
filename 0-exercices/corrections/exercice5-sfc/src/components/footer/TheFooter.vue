<template>
  <footer>
    <the-social-media />
    <figure>
      <the-logo />
    </figure>
    <footer-service-list />
    <the-credit />
    <the-faq />
    <the-map />
    <the-copy-right />
  </footer>
</template>
<script>
import TheCredit from "@/components/footer/TheCredit.vue"
import TheCopyRight from "@/components/footer/TheCopyRight.vue"
import TheFaq from "@/components/footer/TheFaq.vue"
import TheLogo from "@/components/logo/TheLogo.vue"
import TheMap from "@/components/footer/TheMap.vue"
import TheSocialMedia from "@/components/social-media/TheSocialMedia.vue"
import FooterServiceList from "@/components/footer/service/FooterServiceList.vue"
export default {
  components: {
    TheSocialMedia,
    TheCredit,
    TheCopyRight,
    TheFaq,
    TheLogo,
    TheMap,
    FooterServiceList
  }
}
</script>