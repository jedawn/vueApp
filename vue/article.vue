<template>
    <div>
        <header-component/>
        <div>{{msg}}</div>
        <footer-component/>
    </div>
</template>
<style>
</style>
<script>
    import HeaderComponent from '../component/header.vue';
    import FooterComponent from '../component/footer.vue';
    export default{
        data(){
            return{
                msg:'我是文章内容哦'
            }
        },
        components:{
            'header-component':HeaderComponent,
            'footer-component':FooterComponent
        }
    }
</script>
