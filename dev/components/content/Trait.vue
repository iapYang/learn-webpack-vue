<template lang="html">
    <div class='trait frame'>
        <div
            class='back-container'
            @click='backHandler'
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
                :class="ifActive(i)"
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
                @click='nextHandler'
                :class='clickAble'
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
        let p_id = this.$store.state.who.choice;

        if (!p_id) {
            p_id = this.$route.query.p_id;

            this.$store.commit('changeWho', {
                choice: p_id,
            });
        }

        return {
            number: 3,
            traits: Utils.copyArray(Database.traits),
            p_id,
        }
    },
    computed: {
        who() {
            return Database.pictures[this.p_id].name;
        },
        plural() {
            return this.number === 1 ? '' : 's';
        },
        clickAble() {
            return this.number === 0 ? 'able' : 'disabled';
        }
    },
    methods: {
        clickHandler(index) {
            const prevSelected = this.traits[index].selected;

            if (this.number <= 0 && !prevSelected) return;

            this.number -= prevSelected ? -1 : 1;
            this.traits[index].selected = !prevSelected;
        },
        backHandler() {
            this.$router.push({
                name: 'Who',
            });
        },
        ifActive(index) {
            return this.traits[index].selected ? 'active' : 'inactive';
        },
        nextHandler() {
            if (this.number !== 0) return;

            const array = [];

            this.traits.forEach((trait, i) => {
                if (trait.selected) {
                    array.push(i);
                }
            });

            this.$router.push({
                name: 'Showcase',
                query: {
                    p_id: this.p_id,
                    traits_id: array,
                },
            });
        },
    },
    watch: {
        '$route' (to, from) {
          // 对路由变化作出响应...
          const p_id = to.params.p_id;

          this.p_id = p_id;

          this.$store.commit('changeWho', {
              choice: p_id,
          });
        }
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
