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

.app-container{
    position: relative;
}
</style>
