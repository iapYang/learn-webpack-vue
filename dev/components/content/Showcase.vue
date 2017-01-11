<template lang="html">
    <div class="showcase-container">
        <loading v-if="ifLoading"></loading>
        <div
            class='showcase'
            ref="showcase"
            >
            <div class='content-wrapper'>
                <div class='title'>
                    <img src='../../images/picks.png' />
                </div>
                <ul class="product-list">
                    <li
                    v-for="product,i in products"
                    >
                        <a target='_blank' :href="product.clickouturl">
                            <div class='left'>
                                <img :src="product.image" />
                            </div>
                            <div class='right'>
                                <span class='name'>{{product.itemname}}</span>
                                <span class='desc'>{{product.describe}}</span>
                                <span class='price'>{{product.price}}</span>
                                <div class='btn-buy'>shop this</div>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class='controller'>
                    <div
                        class='btn btn-again'
                        >play again</div>
                    <div class='btn btn-share'>share</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IScroll from 'iscroll';

import Loading from './Loading.vue';

import Utils from '../../modules/Utils.js';
import Database from '../../modules/Database.js';

import { mapGetters } from 'vuex';

export default {
    data() {
        const p_id = parseInt(this.$route.query.p_id);
        const traits_id = this.$route.query.traits_id;
        let products = [];
        let ifLoading;

        traits_id.forEach(trait_id => {
            trait_id = parseInt(trait_id);
        });

        this.$store.commit('changeWho', {
            choice: p_id,
        });

        this.$store.commit('changeTrait', {
            choices: traits_id,
        });

        if (!this.$store.state.isFetched) {
            Utils.fetchData(rawData => {
                this.$store.commit('rawDataFetched', {
                    rawData,
                });
            });
        }

        return {
            ifLoading: true,
            p_id,
            traits_id,
        };
    },
    mounted() {
        if (!this.$refs.showcase) return;
        const scroll = new IScroll(this.$refs.showcase, {
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,
            click: true,
            probeType: 3,
        });

        scroll.on('scrollStart', () => {
            scroll.refresh();
        });
    },
    methods: {

    },
    components: {
        Loading,
    },
    computed: {
        ...mapGetters([
            'products',
        ]),
    },
}
</script>

<style lang="scss">
#refinery .content-container .showcase-container {
    position: relative;
    width: 100%;
    height: 100%;

    .showcase {
        position: relative;
        overflow: hidden;
        height: calc(100% - 54px);
        z-index: 1;

        .content-wrapper {
            position: relative;
            max-width: 1520px;
            margin: 0 auto;
            padding: 30px 0 50px;
            // min-height: 3000px;
            .title {
                width: 100px;
                margin: 0 auto;
            }

            .controller {
                margin-top: 40px;
                text-align: center;

                .btn {
                    display: inline-block;
                    font-size: 16px;
                    font-family: BrownStd-Bold;
                    text-transform: uppercase;
                    margin: 0 20px;
                    padding: 14px 28px;
                    letter-spacing: 2px;
                    cursor: pointer;
                    color: #ce912c;
                    border: 2px solid #ce912c;
                    border-radius: 40px;
                    transition: color 0.3s ease,background-color 0.3s ease;
                }

                .btn-share {
                    padding: 14px 54px;
                }
            }

            .product-list {
                width: 90%;
                margin: 30px auto 0;

                li {
                    margin-bottom: 20px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    background-color: #fff;

                    a {
                        display: block;
                        padding: 25px;

                        .left {
                            display: inline-block;
                            width: 35%;
                            vertical-align: middle;
                        }

                        .right {
                            display: inline-block;
                            width: 65%;
                            padding-left: 30px;
                            vertical-align: middle;

                            .name {
                                display: block;
                                letter-spacing: 2px;
                                text-transform: uppercase;
                                color: #000;
                                font-family: BrownStd-Bold;
                                font-size: 20px;
                            }

                            .desc {
                                display: block;
                                margin-top: 20px;
                                color: #000;
                                font-family: BrownStd-Regular;
                                font-size: 20px;
                            }

                            .price {
                                display: block;
                                margin-top: 20px;
                                color: #000;
                                font-family: BrownStd-Regular;
                                font-size: 25px;
                            }

                            .btn-buy {
                                display: inline-block;
                                margin-top: 20px;
                                padding: 14px 18px;
                                transition: color 0.3s ease,background-color 0.3s ease;
                                letter-spacing: 1px;
                                text-transform: uppercase;
                                color: #ce912c;
                                border: 2px solid #ce912c;
                                border-radius: 40px;
                                font-family: BrownStd-Bold;
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
