import Vue from 'vue';
import Vuex from 'vuex';

import Database from './modules/Database.js';
import Utils from './modules/Utils.js';

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
        isFetched: false,
        rawData: {},
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
        rawDataFetched(state, payload) {
            state.isFetched = true;
            state.rawData = payload.rawData;
        },
    },
    getters: {
        products(state) {
            const who_name = Database.pictures[state.who.choice].gsx$person;

            console.log(state.rawData[who_name]);

            if (!state.rawData[who_name]) return;

            let products_array = [];
            state.trait.choices.forEach(id => {
                const trait_name = Database.traits[id].gsx$trait;

                products_array = [...products_array, ...state.rawData[who_name][trait_name]];
            });

            return products_array;
        },
    },
    actions: {

    },
});

export default store;
