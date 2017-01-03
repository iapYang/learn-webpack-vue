<style lang="scss">

@import "../styles/mixin.scss";
@import "../styles/reset.scss";
.app-container {
    /*background-color: red;*/
    width: 100%;
    min-height: 500px;
}

</style>

<template lang="html">

<div class="app-container">
    <div id="tutorial">
        <Navs></Navs>
    </div>
</div>

</template>

<script>
import Navs from './tutorial/Navs.vue';

console.log('app vue');

export default {
    components: {
        Navs,
    }
}

</script>
