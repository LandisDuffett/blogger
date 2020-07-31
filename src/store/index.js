import Vue from "vue";
import Vuex from "vuex";
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
    setComments(state, comments) {
      state.comments = comments
    },
    setActiveBlog(state, blog) {
      state.activeBlog = blog
    },
    setActiveComments(state, comments) {
      state.activeComments = comments
    }
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

    },

    async getBlog({ commit, dispatch }, blogId) {

    },

    async addBlog({ commit, dispatch }) {

    },

    async deleteBlog({ commit, dispatch }, blogId) {

    },

    async addComment({ commit, dispatch }, blogId) {

    },

    async deleteComment({ commit, dispatch }, blogId) {

    },



  },
});
