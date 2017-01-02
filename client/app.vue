<template>
    <div class="main-wrap">
        <header></header>
        <router-view></router-view>
        <footer></footer>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {

            }
        },
        components: {
            header: require('./components/header.vue'),
            header: require('./components/footer.vue')
        }
    }
</script>