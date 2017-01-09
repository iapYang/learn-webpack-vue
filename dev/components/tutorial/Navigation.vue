<style lang="scss" scoped>
    .navs {
        position: relative;
        width: 100%;
        text-align: center;

        .navs-header {
            position: relative;
            display: inline-block;
            margin-top: 60px;
            margin-bottom: 45px;

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

        .navs-body {
            position: relative;
            display: block;

            span {
                font-size: 22px;
                font-weight: bold;
                color: #7d9098;
                font-family: 'Open Sans', sans-serif;
            }

            .chosen {
                color: #ffffff;
                display: inline-block;
                padding: 5px 10px;
                background-color: #c4d7e0;
                border-radius: 2px;
                text-transform: uppercase;
                font-size: 18px;
            }
        }
    }
</style>

<template lang="html">
    <div class="navs">
        <div class="navs-header">
            <li
            v-for="item,index in items"
            @click="clickHandler(index)"
            :class="{ active: index === current_index }"
            >
                <span>
                    {{ item.name }}
                </span>
            </li>
        </div>
        <div class="navs-body">
            <span>You chose </span>
            <span class="chosen">{{ current_choice }}</span>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            items: [{
                name: 'home',
            },{
                name: 'project',
            },{
                name: 'services',
            },{
                name: 'contact',
            }],
            current_index: 0,
        }
    },
    computed: {
        current_choice: function() {
            return this.items[this.current_index].name;
        },
    },
    ready() {},
    attached() {},
    methods: {
        clickHandler(i){
            this.current_index = i;
        }
    },
    components: {}
}

</script>
