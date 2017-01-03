<template>
    <div>
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">导航</el-menu-item>
            <el-submenu index="2">
                <template slot="title">视频</template>
                <el-menu-item index="2-1">电影</el-menu-item>
                <el-menu-item index="2-2">剧集</el-menu-item>
                <el-menu-item index="2-3">其他</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">收藏</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                menus: {
                    '1': 'index',
                    '2-1': 'movies',
                    '2-2': 'tv-play',
                    '2-3': 'others',
                    '3': 'favorites'
                }
            }
        },
        methods: {
            goMenu(name) {
                console.log('route name is %s', name)
                this.$router.push({name})
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
                this.goMenu(this.menus[key])
            }
        }
    }
</script>