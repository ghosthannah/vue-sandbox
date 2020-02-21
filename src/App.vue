<template>
  <div id="app" class="main">Welcome, {{ username }}! This is a VueJS app.</div>
</template>

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
