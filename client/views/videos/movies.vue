<template>
    <div>
        <el-row>
            <el-col :span="20" :offset="2">
                <div class="grid-content bg-purple-dark">
                    <video id="my-video" class="video-js" controls preload="auto" style="width:100%;height:600px;">
                        <source src="1.mp4" type='video/mp4'>
                    </video>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import 'video.js'
    export default {
        data() {
            return {
                name: '1.mp4'
            }
        }
    }
</script>