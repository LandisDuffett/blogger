<template>
  <div class="car col-3 border rounded mb-3" @click="moveToBlogPage">
    <!-- add router link dynamically -->
    <router-link :to="{name: 'Blog', params: {id: commentData._id}}">
      <h3>{{commentData.creator.email}}</h3>
    </router-link>
    <h3>{{commentData.body}}</h3>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: ["commentData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    moveToBlogPage() {
      this.$router.push({
        name: "Comment",
        params: { id: this.commentData._id },
      });
    },
  },
  components: {},
};
</script>


<style scoped>
</style>