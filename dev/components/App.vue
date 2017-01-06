<template lang="html">
    <div class="app-container">
        <router-view></router-view>
    </div>
</template>

<script>
import Tutorial from './Tutorial.vue';

export default {
    components: {
        Tutorial,
    }
}
</script>

<style lang="scss">
@import "../styles/mixin.scss";
@import "../styles/reset.scss";
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

.app-container{
    position: relative;

    .aaa {
        font-size: 15px;
    }
}
</style>
