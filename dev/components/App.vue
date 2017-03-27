<template lang="html">
    <div class="app-container">
        <router-view></router-view>
    </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
@import "../styles/mixin.scss";
@import "../styles/reset.scss";

@include font-face("refinery29");
@include font-face("BrownStd-Bold");
@include font-face("BrownStd-Regular");
@include font-face("icomoon");

body,
html {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

#app {
    background-color: #fcf3f4;    
}

.app-container{
    position: relative;
    max-width: 1500px;
    margin: 0 auto;
    background-color: #fcf3f4;
}
</style>
