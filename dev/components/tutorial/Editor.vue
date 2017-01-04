<template lang="html">
    <div class="editor" @click="editorClickHandler">
        <div class="editor-header" v-show="ifShow" @click.stop>
            <input type="text" v-model="message">
        </div>
        <div class="editor-body" @click.stop="bodyClickHandler">
            <span class="pencil">✎</span>
            <span>{{ message }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Edit me.',
            ifShow: false,
        }
    },
    methods: {
        editorClickHandler: function() {
            this.ifShow = false;
        },
        bodyClickHandler: function() {
            this.ifShow = !this.ifShow;
        },
    },
}
</script>

<style lang="scss" scoped>
    .editor {
        position: relative;
        height: 300px;
        padding-top: 150px;

        .editor-header {
            background-color: #5c9bb7;
            background-image: -webkit-linear-gradient(top, #5c9bb7, #5392ad);
            background-image: -moz-linear-gradient(top, #5c9bb7, #5392ad);
            background-image: linear-gradient(top, #5c9bb7, #5392ad);
            box-shadow: 0 1px 1px #ccc;
            border-radius: 3px;
            width: 290px;
            padding: 10px;
            position: absolute;
            left: 50%;
            margin-left: -150px;
            top: 80px;

            input {
                border: none;
                width: 100%;
                line-height: 34px;
                border-radius: 3px;
                box-shadow: 0 2px 6px #bbb inset;
                text-align: center;
                font-size: 16px;
                font-family: 'Open Sans', sans-serif;
                color: #8d9395;
                font-weight: bold;
                outline: none;
            }

            &:after {
                content: '';
                position: absolute;
                border: 6px solid #5190ac;
                border-color: #5190ac transparent transparent;
                width: 0;
                height: 0;
                bottom: -12px;
                left: 50%;
                margin-left: -6px;
            }
        }

        .editor-body {
            position: absolute;
            display: block;
            width: 100%;
            top: 75%;
            left: 50%;
            transform: translate(-50%,-50%);
            cursor: pointer;
            text-align: center;

            span {
                display: inline-block;
                font-size: 22px;
                font-weight: bold;
                color: #6d8088;
                height: 30px;
                font-family: 'Open Sans', sans-serif;
            }

            .pencil {
                margin-right: 5px;
            }
        }
    }
</style>
