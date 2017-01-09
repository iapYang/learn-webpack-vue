<template lang="html">
    <div class="search">
        <div class="search-header">
            <input
            type="text" name="" value=""
            placeholder="Enter your search terms"
            v-model="message"
            >
        </div>
        <div class="search-body">
            <ul>
                <li
                v-for="item,i in filtered"
                :key="i"
                >
                    <a :href="item.href" target="_blank">
                        <img :src="item.src" alt="">
                    </a>
                    <span class="title">
                        {{ item.title }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                src: './images/css-variables-100x100.jpg',
                title: 'What You Need To Know About CSS Variables',
                href: 'http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/',
            }, {
                src: './images/great-looking-pricing-tables-100x100.jpg',
                title: 'Freebie: 4 Great Looking Pricing Tables',
                href: 'http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/',
            }, {
                src: './images/interesting-resources-february-100x100.jpg',
                title: '20 Interesting JavaScript and CSS Libraries for February 2016',
                href: 'http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/',
            }, {
                src: './images/quick-tip-responsive-headers-100x100.png',
                title: 'Quick Tip: The Easiest Way To Make Responsive Headers',
                href: 'http://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/',
            }, {
                src: './images/learn-sql-20-minutes-100x100.png',
                title: 'Learn SQL In 20 Minutes',
                href: 'http://tutorialzine.com/2016/01/learn-sql-in-20-minutes/',
            }, {
                src: './images/creating-your-first-desktop-app-with-electron-100x100.png',
                title: 'Creating Your First Desktop App With HTML, JS and Electron',
                href: 'http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/',
            }],
            message: '',
        }
    },
    computed: {
        filtered: function() {
            return this.items.filter(item => {
                const lowerCase_data = item.title.toLowerCase();
                const lowerCase_input = this.message.toLowerCase();

                return lowerCase_data.match(lowerCase_input) !== null;
            });
        },
    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>
    .search {
        width: 520px;
        margin: 45px auto 0;

        .search-header {
            background-color: #5c9bb7;
            box-shadow: 0 1px 1px #ccc;
            border-radius: 2px;
            width: 100%;
            padding: 14px;
            margin: 0 auto 20px;
            position: relative;

            input {
                background: #fff no-repeat 13px 13px;
                background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NEY0RTlFMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5NEY0RTlGMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTk0RjRFOUMxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTk0RjRFOUQxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DjA/RAAABK0lEQVR42pTSQUdEURjG8dOY0TqmPkGmRcqYD9CmzZAWJRHVRIa0iFYtM6uofYaiEW2SRJtEi9YxIklp07ZkWswu0v/wnByve7vm5ee8M+85zz1jbt9Os+WiGkYdYxjCOx5wgFeXUHmtBSzpcCGa+5BJTCjEP+0nKWAT8xqe4ArPGEEVC1hHEbs2oBwdXkM7mj/JLZrad437sCGHOfUtcziutuYu2v8XUFF/4f6vMK/YgAH1HxkBYV60AR31gxkBYd6xAeF3VzMCwvzOBpypX8V4yuFRzX2d2gD/l5yjH4fYQEnzkj4fae5rJulF2sMXVrAsaTWttRFu4Osb+1jEDT71/ZveyhouTch2fINQL9hKefKjuYFfuznXWzXMTabyrvfyIV3M4vhXgAEAUMs7K0J9UJAAAAAASUVORK5CYII=);
                border: none;
                width: 100%;
                line-height: 19px;
                padding: 11px 0;
                border-radius: 2px;
                box-shadow: 0 2px 8px #c4c4c4 inset;
                text-align: left;
                font-size: 14px;
                font-family: inherit;
                color: #738289;
                font-weight: bold;
                outline: none;
                text-indent: 40px;
                font-family: 'Open Sans', sans-serif;
            }
        }

        .search-body {
            position: relative;

            ul {
                position: relative;

                li {
                    display: block;
                    padding: 10px;
                    position: relative;
                    border-bottom: 1px solid #ddd;

                    a {
                        display: block;
                        position: relative;
                        width: 60px;

                        img {
                            display: block;
                            position: relative;
                            width: 100%;
                        }
                    }

                    .title {
                        position: absolute;
                        left: 85px;
                        right: 10px;
                        top: 50%;
                        transform: translateY(-50%);
                        font-family: 'Open Sans', sans-serif;
                        font-weight: bold;
                        color: #6e7a7f;
                        font-size: 15px;
                    }
                }
            }
        }
    }
</style>
