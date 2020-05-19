<template>
    <div class="twitter_share">
        <button @click="twitterShare">Share at Twitter</button>
    </div>
</template>

<script>
export default {
    methods:{
        twitterShare(){
           //シェアする画面を設定
            var shareURL = 'https://twitter.com/intent/tweet?text=' + "この動画がおすすめ!!" + "%20%23I like ..." + '&url=' + this.$parent.url;
           //シェア用の画面へ移行
            location.href = shareURL
        }
    }
}
</script>

<style scoped>
    .twitter_share {
        max-width: 1000px;
        margin: auto;
    }
</style>