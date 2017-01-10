<template lang="html">
    <div class='person frame'>
        <div class='wrapper'>
            <div class='title'>
                <span>Who are you shopping for?</span>
            </div>
            <ul class="grid-wrapper">
                <li
                v-for="picture,i in pictures"
                :key={i}
                :class="ifActive(i)"
                @click="clickHandler(i)"
                >
                <div class='picture'>
                    <img :src="imgSrc(picture.noraml)" class='normal'/>
                    <img :src="imgSrc(picture.hover)" class='hover'/>
                </div>
                <div class='name'>
                    <span>{{ picture.name }}</span>
                </div>
                </li>
            </ul>
            <div
            class="btn-next"
            :class="ifClickAble"
            @click="nextHandler"
            >
                <span class='text'>ONWARD</span>
                <span class='symbol'>l</span>
            </div>
        </div>
    </div>
</template>

<script>
import Database from '../../modules/Database.js';

export default {
    data() {
        return {
            pictures: Database.pictures,
            choice: this.$store.state.who.choice,
        }
    },
    methods: {
        imgSrc: function(src) {
            return `../../images/${src}`
        },
        clickHandler: function(index) {
            this.choice = index;
        },
        ifActive: function(i) {
            return this.choice === i ? 'active' : 'inactive';
        },
        nextHandler() {
            this.$store.commit('changeWho', {
                choice: this.choice,
            });
            this.$router.push({
                name: 'Trait',
            });
        },
    },
    computed: {
        ifClickAble() {
            return (this.choice >=0 & this.choice < Database.pictures.length) ? 'able' : 'disabled';
        },
    },
}
</script>

<style lang="scss">
#refinery .content-container .person .wrapper {
    .title {
        span {
            font-family: BrownStd-Bold;
            font-size: 22px;
            letter-spacing: 2px;
            text-align: center;
            color: #ce912c;
        }
    }

    .grid-wrapper {
        margin-top: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        li {
            position: relative;
            width: 30%;
            margin: 1.4%;
            cursor: pointer;
            text-align: center;

            .picture {
                position: relative;

                img {
                    transition: all ease 0.3s;
                }

                .normal {
                    position: relative;
                    opacity: 1;
                }

                .hover {
                    position: absolute;
                    opacity: 0;
                    left: 0;
                    top: 0;
                }
            }

            .name {
                span {
                    font-family: BrownStd-Bold;
                    display: inline-block;
                    text-transform: uppercase;
                    font-size: 20px;
                    letter-spacing: 3px;
                    color: #ce912c;
                    padding-bottom: 12px;
                    border-bottom: 3px solid transparent;
                    transition: all ease 0.3s;
                }
            }

            &.active,
            &:hover {
                .picture {
                    .hover {
                        opacity: 1;
                    }

                    .noraml {
                        opacity: 0;
                    }
                }

                .name span {
                    color: red;
                }
            }

            &.active .name span {
                border-bottom: 3px solid red;
            }
        }
    }
}
</style>
