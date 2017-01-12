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
        productsLoaded(state, payload) {
            state.ifProductsLoaded = true;
            state.ifRawLoaded = true;
            state.rawData = payload.rawData;
            state.products = payload.products;
        },

    },
    getters: {

    },
    actions: {
        performProducts({commit, state}) {
            Utils.fetchData(rawData => {
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
                        rawData,
                        products: products_array,
                    });
                }, 2000);
            });
        },
    },
});

export default store;
