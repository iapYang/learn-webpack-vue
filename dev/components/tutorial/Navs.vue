<style lang="scss" scoped>
    .navs {
        position: relative;
        width: 100%;
        text-align: center;

        .navs-header {
            position: relative;
            display: inline-block;

            li {
                position: relative;
                display: inline-block;
                padding: 18px 30px;
                background-color: #389dc1;
                cursor: pointer;

                span {
                    position: relative;
                    font-size: 16px;
                    font-weight: 600;
                    color: #fff;
                    text-transform: uppercase;
                }
            }
        }
    }
</style>

<template lang="html">
    <div class="navs">
        <div class="navs-header">
            <li v-for="item in items">
                <span>
                    {{ item.name }}
                </span>
            </li>
        </div>
        <div class="navs-body">

        </div>
    </div>
</template>

<script>

console.log('nav vue');

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
        }
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {
        clickHandler(){

        }
    },
    components: {}
}

</script>
