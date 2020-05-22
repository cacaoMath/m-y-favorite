<template>
    <div id="app">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <!--ここで別のパスのページに飛べる今はいらないのでコメントアウト
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/video">Search Video</router-link>
    </div>
     -->
        <SearchVideo />
    </div>
</template>


<script>
    import SearchVideo from '@/components/SearchVideo.vue'

    export default {
        name: 'app',
        components: {
            SearchVideo
        },
        data: function () {
            return {
                url:""
            };
        }
    }
</script>

<style>
    body {
        background-color: #E5E5E6;
    }

    #app {
        font-family: "Montserrat","游ゴシック",YuGothic,"ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN","メイリオ",Meiryo,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
    }

</style>
