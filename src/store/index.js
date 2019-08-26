import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    city: '',
}

const getters = {
    getCity: () => {
        return state.city;
    }
}

const actions = {
    setCity({ commit }, city) {
        commit('SET_CITY', city)
      },
}

const mutations = {
    SET_CITY(state, city) {
        state.city = city;
    },
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})