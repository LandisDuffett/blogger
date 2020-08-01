<template>
  <div class="blog col-3 border rounded mb-3" @click="moveToBlogPage">
    <h3>Title: {{blogData.title}}</h3>
    <h3>Author: {{blogData.name}}</h3>-->
  </div>
</template>


<script>
export default {
  name: "blog",
  props: ["blogData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    /*moveToBlogPage() {
      this.$router.push({ name: "Blog", params: { id: this.blogData._id } });
    },*/
  },
  components: {},
};
</script>


<style scoped>
</style>