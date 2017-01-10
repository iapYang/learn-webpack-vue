<template lang="html">
    <div class='trait frame'>
        <div
            class='back-container'
            >
            <span class='arrow'>r</span>
            <span class='back'>back</span>
        </div>
        <div class='wrapper'>
            <div class='title'>
                <span>What is your </span>
                <span class='name'>
                    {{ who }}
                </span>
                <span> like?</span>
            </div>
            <div class='title'>
                <span>Choose </span>
                <span class='number'>
                    {{ number }}
                </span>
                <span> trait</span>
                <span>{{ plural }}</span>
                <span>.</span>
            </div>
            <ul class="trait-list">
                <li
                v-for="trait,i in traits"
                :key={trait}
                @click="clickHandler(i)"
                >
                <div class="circle-container">
                    <div class='circle'></div>
                    <img class='circle-hover' src='../../images/circle_hover.png'/>
                </div>
                <div class='name'>
                    <span>{{ trait.name }}</span>
                </div>
                </li>
            </ul>
            <div
                class='btn-next'
                >
                <span class='text'>see gifts</span>
                <span class='symbol'>l</span>
            </div>
        </div>
    </div>
</template>

<script>
import Database from '../../modules/Database.js';
import Utils from '../../modules/Utils.js';

export default {
    data() {
        return {
            number: 3,
            traits: Utils.copyArray(Database.traits),
        }
    },
    computed: {
        who() {
            return Database.pictures[this.$store.state.who.choice !== -1 ? this.$store.state.who.choice : 0].name;
        },
        plural() {
            return this.number === 1 ? '' : 's';
        },
    },
    methods: {
        clickHandler(index) {
            // this.traits[index].selected = !this.traits[index].selected;
        },
    },
}
</script>

<style lang="scss">
#refinery .content-container .trait {
    .back-container {
        position: absolute;
        left: 24px;
        top: 20px;
        cursor: pointer;

        .arrow {
            font-family: refinery29;
            font-size: 16px;
            line-height: 44px;
            color: #ce912c;
            display: inline-block;
            transition: color 0.2s ease;
        }

        .back {
            font-family: BrownStd-Bold;
            font-size: 20px;
            line-height: 44px;
            color: #ce912c;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-left: 10px;
            transition: color 0.2s ease;
        }
    }

    .wrapper {
        .title {
            width: 571px;
            margin: 0 auto;
            text-align: center;

            span {
                color: #ce912c;
                font-family: BrownStd-Bold;
                font-size: 22px;
                line-height: 44px;
                letter-spacing: 2px;
            }

            .name {
                font-size: 20px;
                text-transform: uppercase;
            }
        }

        .trait-list {
            margin-top: 40px;

            li {
                padding: 15px 0;
                cursor: pointer;
                width: 378px;
                display: inline-block;
                text-align: left;

                .circle-container {
                    position: relative;
                    display: inline-block;
                    vertical-align: middle;

                    .circle {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 30px;
                        height: 30px;
                        border: 2px solid #ce912c;
                        border-radius: 50%;
                    }

                    .circle-hover {
                        position: relative;
                        width: 30px;
                        opacity: 0;
                    }
                }

                .name {
                    margin-left: 50px;
                    padding: 5px 0;
                    display: inline-block;

                    span {
                        font-family: BrownStd-Bold;
                        font-size: 26px;
                        letter-spacing: 6px;
                        color: #ce912c;
                        display: inline-block;
                        vertical-align: middle;
                        text-transform: uppercase;
                        border-bottom: 3px solid;
                        border-bottom-color: transparent;
                        transition: color 0.3s ease,border-color 0.3s ease;
                    }
                }

                &.active {
                    .circle-container .circle-hover {
                        opacity: 1;
                    }

                    .name span {
                        color: red;
                    }
                }

                &:hover {
                    .name span {
                        color: red;
                        border-bottom-color: red;
                    }
                }
            }
        }
    }
}
</style>
