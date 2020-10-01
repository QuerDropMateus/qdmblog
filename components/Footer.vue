<template>
  <footer class="themefooter">

    <div class="container">
      <div class="row justify-content-between">
        <div class="col">
          <a href="/"><img class="logofooter" :src="($withBase)($themeConfig.logo)"></a>
        </div>
        <div class="col text-right">
          <ul v-if="contact" class="list-unstyled display-flex">
            <li v-for="item in contact" :key="item.iconComponent" class="contact-item">
              <NavLink :link="item.link">
                <component :is="item.iconComponent"></component>
                {{ item.text }}
              </NavLink>
            </li>
          </ul>
          <ul v-if="copyright" class="list-unstyled">
            <li v-for="item in copyright" :key="item.text" class="copyright-item">
              <NavLink :link="item.link">{{ item.text }}</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  TwitchIcon
} from 'vue-feather-icons'

export default {
  components: {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon,
    TwitchIcon
  },

  computed: {
    contact() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link,
          }
        })
        .filter(({ iconComponent }) => iconComponent)
    },

    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      )
    },
  },

  methods: {
    getIconComponentName(contactType) {
      switch (contactType) {
        case 'facebook':
          return 'FacebookIcon'
        case 'twitter':
          return 'TwitterIcon'
        case 'instagram':
          return 'InstagramIcon'
        case 'youtube':
          return 'YoutubeIcon'
        case 'twitch':
          return 'TwitchIcon'
      }
    },
  },
}
</script>

<style>
  .display-flex {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
  }
  .display-flex li {
    margin-left: 5px;
  }
</style>