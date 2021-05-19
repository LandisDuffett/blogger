<template>
  <div class="blogs">
    <h3>Title:{{blog.blog.title}}</h3>
    <img class="img-fluid" :src="blog.imgUrl" />
    <h3>Blog:{{blog.blog.body}}</h3>
    <h3 v-for="comment in comments" :key="comment._id">Comment:{{comment.body}}</h3>
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
    },
    comments() {
      return this.$store.state.activeBlog.comments;
    },
  },
  methods: {},
  components: {
    Comment,
  },
};
</script>


<style scoped>
</style>