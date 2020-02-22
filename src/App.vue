<template>
  <div id="app" class="main">Welcome, {{ username }}! This is a VueJS app.</div>
</template>

<style>
.main {
  font-family: "Helvetica-Neue", Helvetica, Arial, sans-serif;
}
</style>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "Hannah"
    };
  }
};
</script>
