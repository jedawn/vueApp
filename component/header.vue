<template>
    <div>
        <div class="header-pup">
            <div class="container contract-info">
                <span>联系我们 400-054-8066&nbsp;&nbsp;09:30 - 18:00</span>
            </div>
        </div>
        <div class="header-nav container">
            <ul class="nav-menu clearfix">
                <li class="menu-item logo">
                    <img src="http://wpcms.cdnws.54traveler.com/wp-content/themes/54traveler/images/logo.png">
                </li>
                <li class="menu-item">首页</li>
                <li class="menu-item">线路</li>
                <li class="menu-item">途游记</li>
                <li class="menu-item last">关于我们</li>
                <li id="wxLogin"><a href="#">微信登录</a></li>
            </ul>
        </div>
    </div>
</template>
<style lang="sass">
    .header-pup{
        height: 60px;
        background-color: #ad0711;
        overflow: hidden;
        .contract-info{
            text-align: right;
            margin-top: 36px;
            font-weight: bold;
            color: #f2f2f2;
            font-size: 12px;
        }
    }
    .header-nav .nav-menu{
        height: 43px;
        line-height: 43px;
        padding-top: 10px;
        li.menu-item{
            float: left;
            width: 120px;
            border-right: 2px solid #bbb;
            display: inline-block;
            text-align: center;
            height: 20px;
            line-height: 20px;
        }
        li.menu-item.logo{
            width: 260px;
            border-right: 0;
            text-align: left;
            img{
                margin-top: -53px;
                width: 185px;
            }
        }
        li.menu-item.last{
            border-right: 0
        }
        #wxLogin{
            float: right;
            width: 120px;
            height: 20px;
            text-align: right;
            line-height: 20px;
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
