import Vue from 'vue';
import Vuex from 'vuex';

import Database from '../modules/Database.js';
import Utils from '../modules/Utils.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        who: {
            // choice
        },
        trait: {
            // choices
        },
        ifRawLoaded: false,
        ifProductsLoaded: false,
        rawData: {},
        products: [],
        ifGlobalControl: false,
        ifLoading: false,
    },
    getters: {
        getifProductsLoaded(state) {
            return state.ifProductsLoaded;
        },
        getWhoName(state) {
            return Database.pictures[state.who.choice].name;
        },
        getWhoChoice(state) {
            return state.who.choice;
        },
    },
    mutations: {
        increment(state) {
            state.count = state.count + 1;
        },
        changeWho(state, payload) {
            state.who.choice = payload.choice;
        },
        changeTrait(state, payload) {
            state.trait.choices = payload.choices;
        },
        rawDataLoaded(state, payload) {
            state.ifRawLoaded = true;
            state.rawData = payload.rawData;
        },
        productsLoaded(state, payload) {
            console.log('change products state');
            state.ifProductsLoaded = true;
            state.ifLoading = false;
            state.products = payload.products;
        },
        changeGlobal(state, payload) {
            state.ifGlobalControl = payload.shown;
        },
        setLoading(state, payload) {
            state.ifLoading = payload.ifLoading;
        },
    },
    actions: {
        performRawData({dispatch, commit, state}) {
            if (state.ifRawLoaded) {
                dispatch('performProducts', {
                    rawData: state.rawData,
                });
            } else {
                Utils.fetchData(rawData => {
                    commit('rawDataLoaded', {
                        rawData,
                    });

                    dispatch('performProducts', {
                        rawData,
                    });
                });
            }
        },
        performProducts({commit, state}, {rawData}) {
            const who_name = Database.pictures[state.who.choice].gsx$person;

            let products_array = [];
            state.trait.choices.forEach(id => {
                const trait_name = Database.traits[id].gsx$trait;

                products_array = [...products_array, ...rawData[who_name][trait_name]];
            });

            console.log(products_array);

            // to perform as its pictures loaded
            setTimeout(() => {
                commit('productsLoaded', {
                    products: products_array,
                });
            }, 2000);
        },
        performDefaultData({commit, state}, {p_id, traits_id}) {
            console.log(p_id, traits_id);
        },
    },
});

export default store;
