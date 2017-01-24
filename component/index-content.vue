<template>
    <div>
        <!--幻灯片-->
        <div class="slide-t">
            <swiper :options="swiperOption">
                <!-- 幻灯内容 -->
                <swiper-slide v-for="item in imgData">
                    <img :src="item">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>

        <!--***-->
        <div class="travel-why container">
            <div class="chunk-title">为什么跟我们去旅行</div>
            <swiper :options="swiperOptionWhy">
                <!-- 幻灯内容 -->
                <swiper-slide v-for="item in whyData">
                    <img :src="item.why_src">
                    <h3 class="why-title">{{item.why_title}}</h3>
                    <p class="why-txt">{{item.why_txt}}</p>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>

        <!--爆款线路-->
        <div class="hot-line container">
            <div class="chunk-title">爆款线路</div>
            <swiper :options="swiperOptionHot">
                <!-- 幻灯内容 -->
                <swiper-slide v-for="item in hotImgData">
                    <el-row>
                        <el-col :span="14"><img :src="item.hot_src"></el-col>
                        <el-col :span="10">
                            <div class="right-txt">
                                <div class="hot-line-title">{{item.hot_title}}</div>
                                    {{item.hot_txt}}
                                <div class="js-schedule">
                                    <el-button type="primary" icon="edit">我要预定</el-button>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>

        <!--途游记-->
        <div class="tour-blog container">
            <div class="chunk-title">途游记</div>
            <el-row :gutter="20">
                <el-col :lg="11" :md="12">
                    <ul>
                        <a href="#">
                            <li class="blog-item" v-for="item in blogData.blogList">
                                <div class="blog-inner">
                                    <div class="blog-img" :style="{backgroundImage:'url(' + item.blog_src + ')'}"></div>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-title">{{item.blog_title}}</div>
                                    <div class="blog-txt">{{item.blog_txt}}</div>
                                </div>
                            </li>
                        </a>
                    </ul>
                </el-col>
                <el-col :lg="13" :md="12">
                    <div class="index-data">
                        <div class="index-data-img" :style="{backgroundImage:'url(' + blogData.indexData + ')'}"></div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import img1 from '../img/17012313314985.png';
    import img2 from '../img/bd3whnbw.jpg';
    import img3 from '../img/lr4x23bf.jpg';
    import img4 from '../img/char-img1.jpg';
    export default{
        data(){
            return{
                blogData : {
                    indexData : img3,
                    blogList : [
                        {"blog_src" : img3 , "blog_title" : "“辞职去旅行？”别闹了~最全2015年假期旅行表，旅行约起来~" , "blog_txt" : "推送2015年的假期表~小V不考虑你老板的感受，只原意为出行的你提供“天时”“地利”至于“人和”"},
                        {"blog_src" : img3 , "blog_title" : "“辞职去旅行？”别闹了~最全2015年假期旅行表，旅行约起来~" , "blog_txt" : "推送2015年的假期表~小V不考虑你老板的感受，只原意为出行的你提供“天时”“地利”至于“人和”"},
                        {"blog_src" : img3 , "blog_title" : "“辞职去旅行？”别闹了~最全2015年假期旅行表，旅行约起来~" , "blog_txt" : "推送2015年的假期表~小V不考虑你老板的感受，只原意为出行的你提供“天时”“地利”至于“人和”"}
                    ]
                },
                img3 : img3,
                imgData:[img1,img1,img1],
                hotImgData:[
                    {"hot_src" : img2 , "hot_title" : "复兴路上的时光碎片" , "hot_txt" : "经历过开埠、越界筑路、乱战后，上海迎来了短暂的平和；人口剧增、经济繁荣、文艺自由；帝国主义者、外国商人流浪人、革命家、国内难民等在这片方圆几十平方公里的地方辗转腾挪各显神通，好一幅海派丛林。"},
                    {"hot_src" : img2 , "hot_title" : "复兴路上的时光碎片1" , "hot_txt" : "经历过开埠、越界筑路、乱战后，上海迎来了短暂的平和；人口剧增、经济繁荣、文艺自由；帝国主义者、外国商人流浪人、革命家、国内难民等在这片方圆几十平方公里的地方辗转腾挪各显神通，好一幅海派丛林。"},
                    {"hot_src" : img2 , "hot_title" : "复兴路上的时光碎片2" , "hot_txt" : "经历过开埠、越界筑路、乱战后，上海迎来了短暂的平和；人口剧增、经济繁荣、文艺自由；帝国主义者、外国商人流浪人、革命家、国内难民等在这片方圆几十平方公里的地方辗转腾挪各显神通，好一幅海派丛林。"}
                ],
                whyData :[
                    {"why_src" : img4 , "why_title" : "年轻人的小团体出行" , "why_txt" : "VIVA旅行家拒绝购物回扣，拒绝地接社，拒绝“卖游客”等行业陋习。我们更建议你去街巷寻找地道特产，形成从咨询、报名、出团、回访、会员等一系列的完整服务体系……"},
                    {"why_src" : img4 , "why_title" : "年轻人的小团体出行" , "why_txt" : "VIVA旅行家拒绝购物回扣，拒绝地接社，拒绝“卖游客”等行业陋习。我们更建议你去街巷寻找地道特产，形成从咨询、报名、出团、回访、会员等一系列的完整服务体系……"},
                    {"why_src" : img4 , "why_title" : "年轻人的小团体出行" , "why_txt" : "VIVA旅行家拒绝购物回扣，拒绝地接社，拒绝“卖游客”等行业陋习。我们更建议你去街巷寻找地道特产，形成从咨询、报名、出团、回访、会员等一系列的完整服务体系……"},
                    {"why_src" : img4 , "why_title" : "年轻人的小团体出行" , "why_txt" : "VIVA旅行家拒绝购物回扣，拒绝地接社，拒绝“卖游客”等行业陋习。我们更建议你去街巷寻找地道特产，形成从咨询、报名、出团、回访、会员等一系列的完整服务体系……"}
                ],
                swiperOption:{
                    pagination : '.swiper-pagination',
                autoplay: 3000,
                    autoHeight: true,
                    paginationClickable :true
                },
                swiperOptionHot:{
                    pagination : '.swiper-pagination',
                    autoHeight: true,
                    paginationClickable :true,
                    effect : 'fade'
                },
                swiperOptionWhy:{
                    slidesPerView : 3,
                    slidesPerGroup : 3,
                    prevButton:'.swiper-button-prev',
                    nextButton:'.swiper-button-next',
                }
            }
        }
    }
</script>
<style lang="sass">
    .chunk-title{
        font-size: 34px;
        color: #2f2f2f;
        text-align: center;
        line-height: 125px;
        padding-top: 15px;
    }
    .slide-t{
        .swiper-pagination-bullet{
            background-color: #fff
        }
        .swiper-slide{
            img{
                width: 100%;
                display: block;
            }
        }
    }
    .travel-why{
        .swiper-button-prev{
            left: 0;
        }
        .swiper-button-next{
            right: 0;
        }
        .swiper-slide{
            padding: 0 50px;
            img{
                width: 100%
            }
        }
        .why-title{
            color: #015cc5;
            font-size: 22px;
            font-weight: normal;
            height: 42px;
            line-height: 42px;
        }
        .why-txt{
            line-height: 22px;
            color: #666;
            font-size: 12px;
        }
    }

    .hot-line{
        .swiper-slide{
            img{
                width: 100%;
                display: block;
            }
            .el-row{
                background-color: #2b2b2d;
                .right-txt{
                    padding: 20px 32px 0;
                    height: 100%;
                    line-height: 22px;
                    color: #999;
                    margin-bottom: 30px;
                    font-size: 12px;
                    .hot-line-title{
                        font-size: 14px;
                        font-weight: bold;
                        color: #fff;
                        margin-bottom: 5px;
                    }
                    .js-schedule{
                        margin-top: 15px;
                    }
                }
            }
        }
    }

    .tour-blog{
        margin-bottom: 50px;
        .index-data{
            height: 360px;
            padding: 10px 0;
            .index-data-img{
                background-size: cover;
                height: 100%;
            }
        }
        .blog-item{
            padding: 10px 20px 10px 177px;
            border-bottom: solid 1px #e3e5e6;
            position: relative;
            height: 120px;
            overflow: hidden;
            .blog-inner{
                width: 140px;
                height: 120px;
                padding: 10px 0;
                position: absolute;
                left: 0;
                top: 0;
                .blog-img{
                    background-size: cover;
                    height: 100%;
                }
            }
            .blog-content{
                .blog-title{
                    font-size: 14px;
                    color: #015cc5;
                    height: 21px;
                    line-height: 21px;
                    overflow: hidden;
                    margin-bottom: 5px;
                }
                .blog-txt{
                    font-size: 12px;
                    color: #666;
                    line-height: 17px;
                    height: 54px;
                    overflow: hidden;
                }
            }
        }
        .blog-item:last-child{
            border: 0;
        }
    }
</style>
