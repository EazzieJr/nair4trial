<template>
  <div class="relative overflow-x-clip">
    <Sidebar />

    <main class="sidebar-wrapper">
      <div class="relative">
        <TopBar :title="title" :back="back" @openNotification="toggleNotification" />

        <div class="DashboardLayout" v-if="!notificationActive">
          <slot></slot>
        </div>

        <Notifications @close="toggleNotification" v-else />
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    props: ['back', 'title'],

    data(){
      return {
        notificationActive: false,
      }
    },

    methods: {
      toggleNotification() {
        this.notificationActive = !this.notificationActive
      }
    },
  }
</script>

<style lang="postcss" scoped>
.sidebar-wrapper {
  @apply bg-white h-screen overflow-y-auto w-full lg:ml-[252px] xl:ml-[310px] lg:w-[calc(100%-252px)] xl:w-[calc(100%-310px)] transition-[margin-left];
}
</style>