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

            }
        },
        methods: {
            goMenu(name) {
                this.$router.go({
                    name
                })
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
            }
        }
    }
</script>