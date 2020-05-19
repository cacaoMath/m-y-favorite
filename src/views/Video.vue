<template>
    <div class="app">
        <ShareTwitter/>
        <SearchVideo />
    </div>
</template>

<script>
import SearchVideo from '@/components/SearchVideo.vue'
import ShareTwitter from '@/components/ShareTwitter.vue'

export default {
    name: 'app',
        components: {
            SearchVideo,
            ShareTwitter
        }
}
</script>