<template>
    <div>
        <header-component/>
        <div @click="showVatral">
            <div v-for="item in initArr">{{item}}</div>
        </div>
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
                msg:'我是文章内容哦',
                initArr:[1,2,3,4,5,6,7,8,9,0]
            }
        },
        methods:{
            showVatral : function(){
                const num1 = parseInt(Math.random()*10);
                if(num1 < 10 && num1 >=0){
                    this.initArr[num1] = num1*5;
                    console.log(this.initArr)
                }
                setTimeout(this.showVatral,1000)
            }
        },
        components:{
            'header-component':HeaderComponent,
            'footer-component':FooterComponent
        }
    }
</script>
