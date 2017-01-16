import Database from '../modules/Database.js';

export default {
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
    getProducts(state) {
        return state.products;
    },
    getifGlobalControl(state) {
        return state.ifGlobalControl;
    },
    getifLoading(state) {
        return state.ifLoading;
    },
};
