<template>
  <div class="blogs">
    <h3>Title:{{blog.blog.title}}</h3>
    <img class="img-fluid" :src="blog.imgUrl" />
    <h3>{{blog.blog.body}}</h3>
  </div>
</template>


<script>
export default {
  name: "blogs",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBlog", this.$route.params.id);
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
      console.log(this.$store.state.activeBlog);
    },
  },
  components: {},
};
</script>


<style scoped>
</style>