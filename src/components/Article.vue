<template>
  <div class="article">
    <div class="grid-container">
      <div class="grid-row">
        <div v-if="imgAlign === 'left' && imgSrc" class="grid-4">
          <img class="article-image" v-if="imgSrc" :src="imgSrc" />
        </div>
        <div :class="{ 'grid-8': imgSrc, 'grid-12': !imgSrc }">
          <div class="padding-between">
            <h2 class="">{{ title }}</h2>
            <h4 class="" v-if="subtitle">{{ subtitle }}</h4>
            <div class="author-date">Published {{ date }} by {{ author }}</div>
            <div class="article-content" v-html="content"></div>
          </div>
        </div>
        <div v-if="imgAlign === 'right' && imgSrc" class="grid-4">
          <img class="article-image" v-if="imgSrc" :src="imgSrc" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.article {
  width: auto;
  padding: 20px;

  box-shadow: 1px 1px 12px 0 rgba(0, 0, 0, 0.22);
  background: #fff;
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  top: 0;
  transition: top 0.2s ease, opacity 1s ease, transform 1.5s ease;

  @include until-medium {
    width: auto;
    padding: 5px;
  }

  .author-date {
    color: $med-grey;
    font-size: 12px;
  }

  .article-content {
    font-size: 13px;
  }

  .article-image {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    @include until-medium {
      padding-left: 5px;
      padding-right: 5px;
    }
  }
}
</style>

<script>
import moment from "moment";

export default {
  name: "Article",
  props: {
    imgSrc: {
      type: String,
      required: false
    },
    imgAlign: {
      type: String,
      required: false,
      default: () => {
        return "left";
      }
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    },
    author: {
      type: String,
      required: true
    },
    publishDate: {
      type: String,
      required: false,
      default: () => {
        return moment().format("YYYY-MM-DD");
      }
    },
    content: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    date() {
      return moment(this.publishDate).format("MMMM DD, YYYY");
    }
  }
};
</script>
