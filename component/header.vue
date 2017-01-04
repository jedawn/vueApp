<template>
    <div>
        我是头部组件 {{msg}}
    </div>
</template>
<style>
    div{
        color: red;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
