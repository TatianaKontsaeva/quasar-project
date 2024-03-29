<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">My Todo List</div>
        <div class="text-subtitle">{{ todaysDate }}</div>
      </div>
      <q-toggle
        class="absolute-right q-px-md"
        icon="dark_mode"
        size="lg"
        v-model="value"
        :label="value"
        @click="$q.dark.toggle()"
        color="dark"
        false-value="Light Theme"
        true-value="Dark Theme"
      /> 
      <q-img 
      class="header-image absolute-top bg-dimmed"
      src="../assets/background.jpg"/>
    </q-header>
    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 185px); margin-top: 185px; border-right: 1px solid #ddd">

          <q-list padding>
            <q-item to="/" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="list_alt" />
              </q-item-section>

              <q-item-section>
                Todo List
              </q-item-section>
            </q-item>

            <q-item to="/help" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="contact_support" />
              </q-item-section>

              <q-item-section>
                Help
              </q-item-section>
            </q-item>

            <q-item to="/about" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="info_outline" />
              </q-item-section>

              <q-item-section>
                About Us
              </q-item-section>
            </q-item>

            <q-item to="/contacts" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="contact_page" />
              </q-item-section>

              <q-item-section>
                Contacts
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="../assets/background.jpg" style="height: 185px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="90px" class="q-mb-sm">
              <img src="../assets/avatar.jpg">
            </q-avatar>
            <div class="text-weight-bold">Tatiana Kontsaeva</div>
            <div>@tatianakontsaeva</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { date } from 'quasar'
import { useQuasar } from "quasar";

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]
export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  setup () {
    const leftDrawerOpen = ref(false)
    const $q = useQuasar();
    $q.dark.set(true);
    $q.dark.toggle();
      return {
        essentialLinks: linksList,
        leftDrawerOpen,
        toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        },
        value: ref("Light Theme"),
      }
  },
  computed: {
    todaysDate() {
      const timeStamp = Date.now();
      return date.formatDate(timeStamp,"dddd DD MMM YYYY"
      );
    },
  },

});
</script>
<style lang="scss">
  .q-drawer__content {
    background: $light-purple;
  }
  .header-image, .absolute-top {
    height: 100%;
    z-index: -1;
    opacity: 1.1;
  }
  .q-item.q-router-link--active, .q-item--active {
    color: #df9598;
  }
</style>