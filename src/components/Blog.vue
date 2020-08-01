<template>
  <div class="car col-3 border rounded mb-3" @click="moveToBlogPage">
    <!-- add router link dynamically -->
    <router-link :to="{name: 'Blog', params: {id: blogData._id}}">
      <h3>{{blogData.title}}</h3>
    </router-link>
    <img class="img-fluid" :src="blogData.imgUrl" />
    <h3>{{blogData.body}}</h3>
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
    moveToBlogPage() {
      this.$router.push({ name: "Blog", params: { id: this.blogData._id } });
    },
  },
  components: {},
};
</script>


<style scoped>
</style>