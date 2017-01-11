<template lang="html">
    <div class='loading-container frame'>
        <div class='title'>
            <span>the search is on...</span>
        </div>
        <div class='wrapper'>
            <img src='../../images/loading.gif'/>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#refinery .content-container .loading-container {
    position: absolute;
    background-color: #fcf3f4;
    z-index: 2;

    .title {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);

        span {
            color: #ce912c;
            font-size: 20px;
            font-family: BrownStd-Bold;
            letter-spacing: 2px;
            text-transform: uppercase;
        }
    }

    .wrapper {
        width: 250px;
    }
}
</style>
