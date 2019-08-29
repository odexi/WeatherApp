import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    city: '',
    weathers: [],
}

const getters = {
    getCity: () => {
        return state.city;
    },
}

const actions = {
    setCity({ commit }, city) {
        commit('SET_CITY', city)
    },

    setWeatherData({ commit }, payload) {
        commit('SET_WEATHER_DATA', payload)
    },
}

const mutations = {
    SET_CITY(state, city) {
        state.city = city;
    },

    SET_WEATHER_DATA(state, payload) {
        state.weathers = payload;
    },
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})