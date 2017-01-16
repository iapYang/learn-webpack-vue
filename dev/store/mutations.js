export default {
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
    setGlobal(state, payload) {
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
};
