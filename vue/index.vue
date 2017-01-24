<template>
    <div>
        <header-component/>
        <index-content/>
        <footer-component/>
    </div>
</template>
<style>
</style>
<script>
    import HeaderComponent from '../component/header.vue';
    import FooterComponent from '../component/footer.vue';
    import IndexContent from '../component/index-content.vue';
    export default{
        data(){
            return{

            }
        },
        components:{
            'header-component':HeaderComponent,
            'footer-component':FooterComponent,
            'index-content':IndexContent
        }
    }
</script>
