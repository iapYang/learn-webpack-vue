<template lang="html">
    <div class="tutorial-home">
        <ul>
            <li
            v-for="item in items"
            :key='item'
            @click="clickHandler(item)"
            :class="{ active: item['router-name'] === current_name }"
            >
                <span>
                    {{ item.name }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                name: 'Home',
                'router-name': 'tutorial',
            }, {
                name: 'Navigation',
                'router-name': 'tutorial-Navigation',
            }, {
                name: 'Editor',
                'router-name': 'tutorial-Editor',
            }, {
                name: 'Order',
                'router-name': 'tutorial-Order',
            }, {
                name: 'Search',
                'router-name': 'tutorial-Search',
            }, {
                name: 'FilterImg',
                'router-name': 'tutorial-FilterImg',
            }],
            current_index: 0,
        }
    },
    methods: {
        clickHandler(item){
            this.$router.push({
                name: item['router-name'],
            });
        },
    },
    computed: {
        current_name: function() {
            return this.$route.name;
        },
    },
}
</script>

<style lang="scss" scoped>
    .tutorial-home {
        position: relative;
        width: 100%;
        margin-bottom: 20px;

        ul {
            position: relative;
            margin: 0 auto;
            text-align: center;

            li {
                position: relative;
                display: inline-block;
                padding: 18px 30px;
                background-color: #389dc1;
                cursor: pointer;

                span {
                    position: relative;
                    font-size: 16px;
                    font-weight: 700;
                    color: #fff;
                    text-transform: uppercase;
                    font-family: 'Open Sans', sans-serif;
                }

                &.active {
                    background-color: #e35885;
                }
            }
        }
    }
</style>
