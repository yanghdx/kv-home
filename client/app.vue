<template>
    <div class="main-wrap">
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