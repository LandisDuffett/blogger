import Vue from "vue";
import Vuex, { Store } from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [],
    comments: [],
    activeComments: [],
    activeBlog: [],
    profile: {},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs
    },
    setActiveBlog(state, blog) {
      state.activeBlog = blog
    }
    /*setComments(state, comments) {
      state.comments = comments
    },
    setActiveBlog(state, blog) {
      state.activeBlog = blog
    },
    setActiveComments(state, comments) {
      state.activeComments = comments
    }*/
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async getBlogs({ commit, dispatch }) {
      try {
        let res = await api.get("blogs")
        commit("setBlogs", res.data)
      } catch (error) {
        console.error(error);
      }
    },

    async getBlog({ commit, dispatch }, blogId) {
      try {
        let res = await api.get("blogs/" + blogId)
        console.log("got the blog:", res.data);
        commit("setActiveBlog", res.data)
        console.log(this.state.activeBlog)
      } catch (error) {
        console.error(error);
      }
    },

    async addBlog({ commit, dispatch, state }, blogData) {
      try {
        let res = await api.post("blogs", blogData)
        console.log(res.data);
        dispatch("getBlogs")
      } catch (error) {
        console.error(error);
      }
    },

    /*async deleteBlog({ commit, dispatch }, blogId) {

    },

    async addComment({ commit, dispatch }, blogId) {

    },

    async deleteComment({ commit, dispatch }, blogId) {

    },*/



  },
});
