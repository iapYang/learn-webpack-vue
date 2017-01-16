import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';

import Database from '../modules/Database.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        who: {
            // default choice
            choice: -1,
        },
        trait: {
            // default choices
            choices: [-1, -1, -1],
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
        getTraitChoices(state) {
            return state.trait.choices;
        },
        getifGlobalControl(state) {
            return state.ifGlobalControl;
        },
        getifLoading(state) {
            return state.ifLoading;
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
        setDefaultData(state, payload) {
            if (typeof payload.who_choice !== 'undefined') {
                state.who.choice = payload.who_choice;
            }

            if (typeof payload.trait_choices !== 'undefined') {
                state.trait.choices = payload.trait_choices;
            }
        },
    },
    actions,
});

export default store;
