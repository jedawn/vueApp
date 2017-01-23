<template>
    <div>
        <div class="pk">
            哈哈哈
            <div class="pkin">
                吼吼吼
            </div>
        </div>
        <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
        <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
        <img src="../img/ds.png">
        <el-switch
                v-model="value1"
                on-text="0000ok"
                off-text="">
        </el-switch>
        <el-switch
                v-model="value2"
                on-color="#13ce66"
                off-color="#ff4949">
        </el-switch>
    </div>
</template>
<script>
    import ss from "../img/ds.png"
    export default{
        data(){
            return{
                radio: '2',
                ss:ss,
                value1: true,
                value2: true
            }
        }
    }
</script>
<style lang="sass">
    .pk{
    color:red;
        .pkin{
            color:blue;
         }
    }
</style>
