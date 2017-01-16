<template lang="html">
    <div class='welcome frame'>
        <div class='wrapper'>
            <div class='logo'>
                <img src="../../images/logo.png" alt="">
            </div>
            <div class='title'>
                <img src="../../images/entrance.gif" alt="">
            </div>
            <div class='desc'>
                <span>
                    THE PERFECT PRESENT IS RIGHT THIS WAY
                </span>
            </div>
            <div
                class='btn-start'
                @click='clickHandler'
                >
                <span class='text'>begin</span>
                <span class='symbol'>l</span>
            </div>
            <div class='check-out'>
                <a
                    href='http://www.refinery29.com/best-gifts'
                    target='_blank'
                    >
                    OR GO STRAIGHT TO GIFT GUIDES
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        clickHandler: function() {
            this.$router.push({
                name: 'Who',
            });
        },
    },
}
</script>

<style lang="scss" scoped>
#refinery .content-container .welcome .wrapper{
    text-align: center;

    .logo {
        width: 130px;
        margin: 5% auto 0;
    }

    .title {
        width: 620px;
        margin: 1% auto 0;
    }

    .desc {
        text-align: center;

        span {
            display: inline-block;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #ce912c;
            font-family: BrownStd-Bold;
            font-size: 14px;
        }
    }

    .btn-start {
        display: inline-block;
        margin-top: 5%;
        padding: 13px 36px 12px;
        cursor: pointer;
        transition: color 0.3s ease,background-color 0.3s ease;
        text-align: center;
        color: #ce912c;
        border: 2px solid #ce912c;
        border-radius: 40px;

        .text {
            font-family: BrownStd-Bold;
            font-size: 14px;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        .symbol {
            font-family: refinery29;
            font-size: 11px;
            padding-left: 4px;
        }
    }

    .check-out {
        position: relative;
        margin-top: 6%;

        a {
            color: #ce912c;
            opacity: 0.5;
            font-family: BrownStd-Bold;
            font-size: 12px;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
    }
}
</style>
