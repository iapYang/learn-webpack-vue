<template lang="html">
    <div class="filter-img">
        <div class="btn-list">
            <div
            v-for="button,i in buttons"
            class="btn"
            :key="button + i"
            @click="clickHandler(button.condition)"
            >
                <span>{{ button.name }}</span>
            </div>
        </div>
        <ul>
            <li
            v-for="item,i in shuffled"
            :key="i"
            :class="item.color"
            >
                <span>{{ item.number }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import Utils from '../../modules/Utils.js';

const colors = ['red', 'green', 'blue'];

const base = [];

const type = ['A', 'B', 'C'];

let default_condition = 'ABC';

for (let i = 0; i < 7; i++) {
    base.push({
        color: colors[0],
        number: i + 1,
        type: 0,
    });
}

for (let i = 0; i < 9; i++) {
    base.push({
        color: colors[1],
        number: i + 1,
        type: 1,
    });
}

for (let i = 0; i < 11; i++) {
    base.push({
        color: colors[2],
        number: i + 1,
        type: 2,
    });
}

export default {
    data() {
        return {
            items: base,
            buttons: [{
                name: 'All',
                condition: 'ABC',
            }, {
                name: 'A',
                condition: 'A',
            }, {
                name: 'B',
                condition: 'B',
            }, {
                name: 'C',
                condition: 'C',
            }, {
                name: 'A+B',
                condition: 'AB',
            }, {
                name: 'B+C',
                condition: 'BC',
            }, {
                name: 'A+C',
                condition: 'AC',
            }],
        }
    },
    methods: {
        clickHandler: function(condition) {
            if (condition === default_condition) return;

            default_condition = condition;

            this.items = base.filter(item =>
                condition.includes(type[item.type])
            );

        },
    },
    computed: {
        shuffled: function() {
            return Utils.shuffle(this.items);
        },
    },
}
</script>

<style lang="scss" scoped>
    .filter-img {
        position: relative;
        width: 100%;
        margin: 0 auto;

        .btn-list {
            position: relative;
            display: block;
            text-align: center;

            .btn {
                display: inline-block;
                margin-left: 5px;
                padding: 10px 20px;
                cursor: pointer;
                background-color: #389dc1;

                span {
                    display: inline-block;
                    color: #fff;
                    font-size: 18px;
                    font-weight: bold;
                    font-family: 'Open Sans', sans-serif;
                }
            }

            :nth-child(1) {
                margin-left: 0;
            }
        }

        ul {
            position: relative;

            li {
                position: relative;
                display: inline-block;
                width: 80px;
                height: 80px;
                margin-left: 10px;
                margin-top: 10px;
                text-align: center;

                span {
                    display: inline-block;
                    color: #fff;
                    font-size: 30px;
                    line-height: 80px;
                    font-weight: bold;
                    font-family: 'Open Sans', sans-serif;
                }

                &.red {
                    background-color: #e35885;
                }

                &.green {
                    background-color: #8ec16d;
                }

                &.blue {
                    background-color: #389dc1;
                }
            }
        }
    }
</style>
