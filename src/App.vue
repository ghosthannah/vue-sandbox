<template>
  <div class="main">
    <div class="header">
      <h2>{{ title }}</h2>
      <div>Welcome, {{ username }}! This is a VueJS app.</div>
    </div>

    <div
      v-for="card in cards"
      :key="card.title"
      class="display-inline-block padding-between"
    >
      <Card
        :title="card.title"
        :subtitle="`${card.subtitle ? card.subtitle : ''}`"
        :content="card.content"
        :link="`${card.link ? card.link : ''}`"
      />
    </div>

    <div class="padding-between">
      <Article
        :title="'Sample Article'"
        :subtitle="'Creating custom components with VueJS'"
        :imgSrc="'/assets/bulbs.jpg'"
        :content="loremIpsum1"
        :author="'ghosthannah'"
        :publishDate="'2020-02-01'"
      />
    </div>

    <div class="padding-between">
      <Article
        :title="'No Image? No Problem!'"
        :subtitle="'This is how a basic post would appear without an image'"
        :content="loremIpsum3"
        :author="'ghosthannah'"
        :publishDate="'2020-02-16'"
      />
    </div>

    <div class="padding-between">
      <Article
        :title="'Lorem Ipsum Content'"
        :subtitle="''"
        :imgSrc="'/assets/coding.jpg'"
        :imgAlign="'right'"
        :content="loremIpsum2"
        :author="'ghosthannah'"
        :publishDate="'2020-02-22'"
      />
    </div>
  </div>
</template>

<style lang="scss">
.main {
  padding: 20px;

  @include until-medium {
    padding: 5px;
  }
  .header {
    margin-bottom: 20px;
    @include until-medium {
      margin-bottom: 10px;
    }
  }

  .padding-between {
    padding: 10px;
  }
}
</style>

<script>
import Card from "@/components/Card";
import Article from "@/components/Article";

import content from "@/assets/content";

export default {
  name: "App",
  components: {
    Card,
    Article
  },
  computed: {
    cards() {
      return [
        {
          title: "Sample Card",
          subtitle: "An example card",
          content:
            "This should accept an HTML string, so <i>try it out</i> if you wish."
        },
        {
          title: "Link",
          subtitle: "A card with a link ",
          content:
            "Clicking on this card should direct you to the specified link.",
          link: "https://www.hannahcorrello.com"
        },
        {
          title: "No Subtitle or Link",
          content: "Let's hope this content is interesting on it's own!"
        }
      ];
    }
  },
  data() {
    return {
      title: "Vue Sandbox",
      username: "Hannah",
      loremIpsum1: content.ipsum1,
      loremIpsum2: content.ipsum2,
      loremIpsum3: content.ipsum3
    };
  }
};
</script>
