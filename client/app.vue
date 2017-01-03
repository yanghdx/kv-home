<template>
    <div class="main">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
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
            appHeader: require('./components/header.vue'),
            appFooter: require('./components/footer.vue')
        }
    }
</script>
<style scoped>
    .main {
        width: 100%;
        min-height: 100px;
    }
</style>