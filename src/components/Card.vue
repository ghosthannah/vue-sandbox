<template>
  <div class="card-main">
    <a class="card style-like-div" v-if="link" :href="link">
      <h2>{{ title }}</h2>
      <h4 v-if="subtitle">{{ subtitle }}</h4>
      <div class="card-content" v-if="content" v-html="content"></div>
    </a>
    <div v-else class="card">
      <h2>{{ title }}</h2>
      <h4 v-if="subtitle">{{ subtitle }}</h4>
      <div class="card-content" v-if="content" v-html="content"></div>
    </div>
  </div>
</template>

<style lang="scss">
.style-like-div {
  text-decoration: none !important;
  color: $black;
}

.style-like-div:hover {
  background: $almost-white;
}

a:hover {
  cursor: pointer;
}

.card {
  padding: 20px;
  max-width: 300px;
  max-height: 400px;

  box-shadow: 1px 1px 12px 0 rgba(0, 0, 0, 0.22);
  background: #fff;
  color: $navy;
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  top: 0;
  transition: top 0.2s ease, opacity 1s ease, transform 1.5s ease;

  @include until-medium {
    padding: 5px;
    height: 250px;
    width: 175px;
  }
}

.card:hover {
  top: -8px;
}
</style>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: [String, Number],
      required: true
    },
    subtitle: {
      type: String,
      required: false
    },
    content: {
      type: [String, Number],
      required: false
    },
    link: {
      type: String,
      required: false
    }
  }
};
</script>
