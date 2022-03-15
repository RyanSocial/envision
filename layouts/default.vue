<template>
  <div>
    <CurrentMenu v-if="loggedInUser === 'Ryan'"></CurrentMenu>
    <nuxt />
  </div>
</template>

<script>
import CurrentMenu from "@/components/Navigation/EnvisionAdmin.vue";

export default {
  components: {
    CurrentMenu
  },
  data() {
    return {
      users: ["Ryan", "Andy", "Dawie"]
    };
  },
  computed: {
    loggedInUser() {
      return this.users[1];
    }
  }
};
</script>

<style lang="scss" scoped></style>
