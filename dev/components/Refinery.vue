<template lang="html">
    <div id="refinery">
        <div class="refinery-wrapper">
            <r-header></r-header>
            <div class="content-container">
                <router-view></router-view>
            </div>
            <global-control v-show="$store.state.ifGlobalControl"></global-control>
        </div>
    </div>
</template>

<script>
import RHeader from './RHeader.vue';
import GlobalControl from './GlobalControl.vue';

export default {
    components: {
        RHeader,
        GlobalControl,
    },
    watch: {
        '$route' (to, from) {
            this.$store.commit('changeGlobal', {
                shown: (!to.query.p_id && !to.query.traits) ? true : false,
            });
        }
    }
}
</script>

<style lang="scss">
#refinery {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #f1f1f1;

    .refinery-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .content-container {
        position: absolute;
        width: 100%;
        top: 50px;
        bottom: 0;
        background-color: #fcf3f4;

        .frame {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;

            .wrapper {
                position: absolute;
                text-align: center;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);

                .btn-next {
                    position: relative;
                    padding: 14px 30px 12px;
                    margin-top: 5%;
                    display: inline-block;
                    text-align: center;
                    color: #ce912c;
                    border-radius: 40px;
                    transition: color 0.3s ease,background-color 0.3s ease;
                    border: 2px solid #ce912c;
                    cursor: pointer;
                    text-align: center;

                    .text {
                        font-family: BrownStd-Bold;
                        font-size: 16px;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                    }

                    .symbol {
                        font-family: refinery29;
                        font-size: 13px;
                        padding-left: 6px;
                    }

                    &.disabled {
                        opacity: 0.5;
                        cursor: default;
                        transition: all 0.3s ease;
                    }
                }
            }
        }
    }
}
</style>
