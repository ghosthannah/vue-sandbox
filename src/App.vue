<template>
  <div class="main">
    <h2>{{ title }}</h2>
    <div>Welcome, {{ username }}! This is a VueJS app.</div>
  </div>
</template>

<style lang="scss">
.main {
  padding: 20px;

  @include until-medium {
    padding: 5px;
  }
}
</style>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Vue Sandbox",
      username: "Hannah"
    };
  }
};
</script>
