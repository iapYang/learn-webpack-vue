import Utils from '../modules/Utils.js';
import Database from '../modules/Database.js';
import PictureLoader from '../modules/PictureLoader.js';

PictureLoader.useStorage = false;

export default {
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

        const pictures = [];
        products_array.forEach(product => {
            pictures.push(product.image);
        });

        // to perform as its pictures loaded
        new PictureLoader({
            sourceQueue: pictures,
        }).load({
            end: () => {
                commit('productsLoaded', {
                    products: products_array,
                });
            },
        });
    },
    performDefaultData({commit, state}, {p_id, traits_id}) {
        let who_choice, trait_choices;

        // change the data from string to int
        if (typeof p_id !== 'undefined') {
            who_choice = parseInt(p_id, 10);
        }

        if (typeof traits_id !== 'undefined') {
            trait_choices = [];
            traits_id.forEach((trait_id, i) => {
                trait_choices.push(parseInt(trait_id, 10));
            });
        }

        commit('setDefaultData', {
            who_choice,
            trait_choices,
        });
    },
};
