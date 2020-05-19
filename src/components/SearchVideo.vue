<template>
    <div class="body">
        <div class= "header">
            <div class="title">
                <font size="6" color="#c71585">I Like ...</font>
                <p>あなたが好きな動画をみんなにシェアしよう!!</p>
            </div>

            <br>
            <input size="40" v-model="keyword" placeholder="Please input keyword you like ...">
            <button @click="search_video">Search</button>
        </div>
        <div class="content">
            <table cellspacing="0" cellpadding="5" v-show="results">
                <tr>
                    <th width= 10%>
                        <font>No</font>
                    </th>
                    <th width=30%>
                        <font>Video</font>
                    </th>
                    <th width=60%>
                        <font>Contents</font>
                    </th>
                </tr>

                <tr v-for="(movie, index) in results" v-bind:key="movie.id.videoId">
                    <!-- No -->
                    <td valign="top" width=10%>{{ index + 1 }}</td>
                    <!-- Video -->
                    <td valign="top" width=30%>
                        <a v-bind:href="'https://www.youtube.com/watch?v=' + movie.id.videoId">
                            <img width="300" height="200" v-bind:src="movie.snippet.thumbnails.medium.url">
                        </a>
                    </td>
                    <!-- titleとdescription -->
                    <td align="left" valign="top" width=60%>
                        <font size="5" color="#c71585"><b>{{ movie.snippet.title }}</b></font>
                        <button @click="add_list(movie.id.videoId)" id="add_btn">Add</button>
                        <br>
                        {{ movie.snippet.description}}
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

            add_list: function (value) {
                this.favlist.push(" https://www.youtube.com/watch?v=" + value )
                alert(this.favlist)
                this.$parent.url = this.favlist
            }
        }
    };
</script>

<style>

    .content {
        overflow-y: scroll;
        width: 80%;
        height: 50%;
        margin: 0 auto;
        max-width: 900px;
        max-height: 600px;
    }

    #add_btn {
        position: relative;
        display: inline-block;
        padding: 0.25em 0.5em;
        text-decoration: none;
        color: #FFF;
        background: #fd9535; /*背景色*/
        border-bottom: solid 2px #d27d00; /*少し濃い目の色に*/
        border-radius: 4px; /*角の丸み*/
        box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
        font-weight: bold;
    }

        #add_btn :active {
            border-bottom: solid 2px #fd9535;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
        }

    table {
        border-collapse: collapse;
        border: solid 2px 2px #ffffff; /*表全体を線で囲う*/
    }

    table th {
        color: #fff0f5; /*文字色*/
        background: #009bbf; /*背景色*/
        border: dashed 1px #c71585;
    }

    table td {
        background: #009bb9;
        border: dashed 1px #c71585;
    }
</style>
