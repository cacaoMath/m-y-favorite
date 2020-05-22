<template>
    <div class="body">
        
        <meta name="viewport" content="width=device-width,initial-scale=1">

        <div class="header">
            <h1 class="title">I like ...</h1>
            <p>あなたが好きな動画をみんなにTwitterでシェアしよう!!</p>
            <input v-model="keyword"  placeholder="keyword" class="searchBox">
            <a @click="search_video" id="search_btn">Search</a>
        </div>

        <div class="content">
            <table cellpadding="5" v-show="results" class=" table">

                <tr v-for="movie in results" v-bind:key="movie.id.videoId">
                    <!-- Video -->
                    <td valign="top">
                        
                        <div class="videoInfo">
                            <a v-bind:href="'https://www.youtube.com/watch?v=' + movie.id.videoId">
                                <img class="imgs" v-bind:src="movie.snippet.thumbnails.medium.url">
                            </a>
                            
                            <p>{{ movie.snippet.title }}</p>
                            
                        </div>
                        

                        <div class="btn">
                            <a @click="watchMovie(movie.id.videoId)" id="btn">Watch</a>|
                            <a @click="explainMovie(movie.snippet.description)" id="btn">Info</a>|
                            <a @click="twitterShare(movie.id.videoId)" id="btn">Share</a>
                        </div>
                    </td>
                </tr>

            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {

        name: "SearchVideo",
        data: function () {
            return {
                favlist:[],
                results: null,
                keyword: "",
                order: "viewCount", // リソースを再生回数の多い順に並べます。
                params: {
                    q: "", // 検索クエリを指定します。
                    part: "snippet",
                    type: "video",
                    maxResults: "20", // 最大検索数
                    key: "AIzaSyCb2iPZ119TGuksYAFI7Rjk0xIOxi8-lBY"
                }
            };
        },
        props: {
            msg: String
        },
        methods: {
            search_video: function () {
                this.params.q = this.keyword;
                var self = this;
                axios
                    .get("https://www.googleapis.com/youtube/v3/search", {
                        params: this.params
                    })
                    .then(function (res) {
                        self.results = res.data.items;
                    })
            },

            explainMovie (value) {
                alert(value)
            },

            watchMovie(value) {
                var url = "https://www.youtube.com/watch?v=" + value
                location.href = url
            },

            twitterShare(value) {
                //シェアする画面を設定
                var shareURL = 'https://twitter.com/intent/tweet?text=' + "私のおすすめ!!" + "&url=https://www.youtube.com/watch?v=" +value;
                //シェア用の画面へ移行
                location.href = shareURL
            },

        }
    };
</script>

<style>
    @media screen and (min-width: 767px) { /*ウィンドウ幅が767px以上の場合に適用*/
        .header {
            background: #fff;
            position: sticky;
            width: 100%;
            height: 150px;
            z-index: 1;
            margin: 0 auto;
            box-sizing:border-box;
            top:0px;
        }


        .content {

            width: 100%;
        }

        .imgs {
            width: 300px;
            height: 200px;
        }

        table {
            border-collapse: collapse;
            border: solid 2px 2px #ffffff; /*表全体を線で囲う*/
            margin: auto;
        }

            table th {
                color: #fff0f5; /*文字色*/
                background: #009bbf; /*背景色*/
                border: dashed 1px #c71585;
            }

            table td {
                background: #009bb9;
                border: dashed 1px #c71585;

                display: inline-block;
                background-color: #fff;
                margin: 5px;
                padding-bottom: 10px;
                border-radius: 5px;
                -moz-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
                -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
            }

    }


    @media screen and (max-width: 479px) { /*ウィンドウ幅が最大479pxまでの場合に適用*/

        .header {
            background: #87B9C4;
            position: sticky;
            height: 105px;
            z-index: 999;
            width: 100%;
            top: 0px;
            padding-top: 5px;
            border-radius: 2px;
            -moz-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
            -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
        }

        .content {
            padding-top: 0px;
            width: 100%;

        }

        .title{
            margin-top:0px;
            margin-bottom:0px;
        }

        .imgs {
            max-width: 80%;
            height: auto;
        }
    

        table {
            border-collapse: separate;
            border-spacing:10px;
            margin: auto;
        }

            table td {
                background-color: #fff;
                margin: 5px;
                padding-bottom: 10px;
                border-radius: 5px;
                -moz-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
                -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
            }


    }

    p {
        margin: 5px auto;
        font-size:0.8em;
    }

    .btn{
        display: inline-block;
    }

    #btn {
        margin-left: 10px;
        margin-right: 10px;
        color: #6AD3DB;
        text-decoration: none;
    }



    #search_btn {
        margin-left: 10px;
        margin-right: 10px;
        display: inline-block;
        background-color: #26a69b; /*背景色*/
        color: #FFF; /*文字色*/
        font-size: 1em; /*文字サイズ*/
        text-decoration: none;
        letter-spacing: 0.05em; /*字間*/
        padding: 0.1em 0.5em; /*ボタン内の余白*/
        border-radius: 3px; /*角の丸み*/
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: .3s ease-out; /*変化を緩やかに*/
    }

    .searchBox {
        padding: 2px 5px; /*ボックスを大きくする*/
        font-size: 1em;
        border-radius: 3px; /*ボックス角の丸み*/
        border: 2px solid #ddd; /*枠線*/
    }


</style>
