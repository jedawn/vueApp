<template>
    <div>
        <footer>
            <div class="container">
                <el-row :gutter="20">
                    <el-col :span="16">
                        <ul class="list-inline">
                            <li>
                                <a href="#">关于我们</a>
                            </li>
                            <li>
                                <a href="#">联系我们</a>
                            </li>
                            <li>
                                <a href="#">关注我们</a>
                            </li>
                        </ul>
                    </el-col>
                    <el-col :span="8">
                        <div class="footer-logo">
                            <img src="http://wpcms.cdnws.54traveler.com/wp-content/themes/54traveler/images/logo.png">
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <p class="footer-p">上海稻草人旅行社有限公司 国家旅游局经营许可证号: L-SH-CJ00131
                            <br>地址：上海市虹口区广纪路738号1幢401室&nbsp;&nbsp; 联系电话： 400-054-8066（9:30-18:00）
                            <br>2016 © 54Traveler.com All rights reserved. No part of this site may be reproduced without our written permission.
                        </p>
                    </el-col>
                    <el-col :span="8">
                        <div class="oth-tip">沪公网备 31010013301</div>
                    </el-col>
                </el-row>
            </div>
        </footer>
    </div>
</template>
<style lang="sass">
    footer{
        background-color: #9b0000;
        color: #fff;
        padding: 20px 0 50px;
        .el-row{
            margin-top: 30px
        }
        .list-inline{
            li{
                line-height: 28px;
                margin-top: 10px;
                border-right: 1px solid #ddd;
            }
        }
        .footer-logo{
            text-align: right;
            img{
                width: 80%;
                vertical-align: middle;
            }
        }
        a{
            color: #fff;
        }
        .footer-p{
            font-size: 12px
        }
        .oth-tip{
            text-align: right;
            font-size: 12px
        }
    }
</style>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
