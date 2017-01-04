<template lang="html">
    <div class="order">
        <div class="order-header">
            <span>Services</span>
        </div>
        <div class="order-body">
            <ul>
                <li
                v-for="item,i in items"
                :key="i"
                @click="clickHandler(item)"
                :class="{ active: item.selected }"
                >
                    <span class="name">{{ item.name }}</span>
                    <span class="price">${{ item.price.toFixed(2) }}</span>
                </li>
            </ul>
            <ul class="total">
                <li>
                    <span class="name">Total</span>
                    <span class="price">${{ total.toFixed(2) }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                name: 'Web Development',
                price: 300,
                selected: true,
            },{
                name: 'Design',
                price: 400,
                selected: false,
            },{
                name: 'Integration',
                price: 250,
                selected: false,
            },{
                name: 'Training',
                price: 220,
                selected: false,
            }],
        }
    },
    methods: {
        clickHandler: function(item) {
            item.selected = !item.selected;
        },
    },
    computed: {
        total: function() {
            let all = 0;

            this.items.forEach(item => {
                if (item.selected) {
                    all += item.price;
                }
            });

            return all;
        }
    },
}
</script>

<style lang="scss" scoped>
    .order {
        background-color: #61a1bc;
        border-radius: 2px;
        box-shadow: 0 1px 1px #ccc;
        width: 520px;
        padding: 35px 60px;
        margin: 50px auto;

        .order-header {
            display: block;
            text-align: center;

            span {
                display: inline-block;
                color: #fff;
                font-size: 64px;
                font-family: 'Open Sans', sans-serif;
                font-weight: normal;
                line-height: 1;
                text-shadow: 0 3px 0 rgba(0,0,0,0.1);
            }
        }

        .order-body {
            position: relative;

            ul {
                margin: 20px 0 15px;

                li {
                    display: block;
                    position: relative;
                    margin-bottom: 8px;
                    padding: 20px 30px;
                    background-color: #e35885;
                    cursor: pointer;

                    span {
                        color: #fff;
                        font-size: 20px;
                        font-weight: bold;
                        font-family: 'Open Sans', sans-serif;
                    }

                    .price {
                        position: absolute;
                        right: 30px;
                        top: 50%;
                        transform: translateY(-50%);
                    }

                    &.active {
                        background-color: #8ec16d;
                    }
                }
            }

            .total {
                margin: 0;
                border-top: 1px solid rgba(255,255,255,0.5);

                li {
                    background-color: transparent;
                }
            }
        }
    }
</style>
