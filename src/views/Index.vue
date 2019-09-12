<template>
    <div class="octoon_index">
        <div class="octoon_titleBox">
            <div class="title"><span>A sophisticated text editor forcode, markup and prose</span></div>
            <div class="titleBox_button">
                <div class="link">
                    <el-button type="info">DOWNLOAD FOR WINDOWS</el-button>
                </div>
                <div class="link"><i>Sublime Text 3 (Build 3207)</i></div>
                <div class="link">
                    <el-link type="info">Changelog</el-link>
                </div>
            </div>
            <div class="swiperBox">
                <div class="swiper">
                    <el-carousel height="754px">
                        <el-carousel-item v-for="(item, index) in carouselList" :key="index">
                            <el-image :src="item.fujian" style="width: 100%; height: 100%"></el-image>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
        <div class="octoon_main">
            <main>
                <section>
                    <h2 class="love">
                        <span>Some features our users love:</span>
                    </h2>
                    
                    <div class="feature odd">
                        <h3>Goto Anything</h3>
                        <p>Use <span class="feature">Goto Anything</span> to open files with only a few keystrokes, and instantly jump to symbols, lines or words.</p>
                    </div>
                    <div class="feature even">
                        <h3>Goto Definition</h3>
                        <p>Using information from syntax definitions, Sublime Text automatically generates a project-wide index of every class, method and function. This index powers <span class="feature">Goto Definition</span>, which is exposed in three different ways:</p>
                    </div>

                    <div class="feature odd">
                        <h3>Goto Anything</h3>
                        <p>Use <span class="feature">Goto Anything</span> to open files with only a few keystrokes, and instantly jump to symbols, lines or words.</p>
                    </div>
                    <div class="feature even">
                        <h3>Goto Definition</h3>
                        <p>Using information from syntax definitions, Sublime Text automatically generates a project-wide index of every class, method and function. This index powers <span class="feature">Goto Definition</span>, which is exposed in three different ways:</p>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>

<script>
    import swiper1 from '@/assets/index/1.png'
    import swiper2 from '@/assets/index/2.png'
    import swiper3 from '@/assets/index/3.png'
    import swiper4 from '@/assets/index/4.png'
    export default {
        name: 'Index',
        data() {
            return {
                carouselList: [{
                        fujian: swiper1
                    },
                    {
                        fujian: swiper2
                    },
                    {
                        fujian: swiper3
                    },
                    {
                        fujian: swiper4
                    }
                ]
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss">
    .octoon_index {
        width: 100%;
        height: auto;

        .octoon_titleBox {
            font-size: 34px;
            line-height: 50px;
            color: #fff;
            text-align: center;
            box-sizing: border-box;
            width: 100%;
            background: linear-gradient(135deg, #A9C8C8 0%, #A8B3C2 100%);
            padding-top: 60px;
            padding-bottom: 60px;

            .title {
                margin: 0 auto;
                width: 50%;
                padding: 0 10px 5px;
                background-color: rgba(0, 0, 0, 0.1);
                -webkit-box-decoration-break: clone;
                box-decoration-break: clone;
                border-radius: 3px;
            }

            .titleBox_button {
                margin: 20px auto;
                width: 50%;
                display: flex;
                justify-content: space-around;
                font-size: 14px;

                .link {
                    color: #fff;
                }
            }

            .swiperBox {
                width: 100%;
                background: linear-gradient(135deg, #A9C8C8 0%, #A8B3C2 100%);

                .swiper {
                    width: 90%;
                    margin: 0 auto;
                }

                .el-carousel__item h3 {
                    color: #475669;
                    font-size: 14px;
                    opacity: 0.75;
                    line-height: 150px;
                    margin: 0;
                }

                .el-carousel__item:nth-child(2n) {
                    background-color: #99a9bf;
                }

                .el-carousel__item:nth-child(2n+1) {
                    background-color: #d3dce6;
                }
            }
        }

        .octoon_main {
            width: 100%;
            height: 500px;

            main {
                display: block;
                -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#f9f9f9', endColorstr='#ffffff')";
                background: linear-gradient(180deg, #f9f9f9 0%, #fff 250px);
                background-color: #fff;
                overflow: hidden;

                section {
                    margin: auto;
                    width: 1140px;
                    background-position: right 32px bottom 0;
                    background-size: 256px auto;
                    min-height: 350px;
                    padding-bottom: 100px;

                    .love {
                        text-align: center;
                        margin: 1.2em 0 0;
                        font-size: 34px;
                        line-height: 54px;
                        font-weight: normal;

                        .span {
                            padding: 2px 10px 3px;
                            background-color: rgba(0, 0, 0, 0.05);
                            -webkit-box-decoration-break: clone;
                            box-decoration-break: clone;
                            border-radius: 3px;
                        }
                    }
                    div .feature .odd {
                        clear: left;
                        padding-left: 2.5%;
                    }
                    div.feature {
                        margin-left: 5%;
                        text-align: left;
                        float: left;
                        width: 45%;
                    }
                    div.feature h3 {
                        margin-bottom: 0.5em;
                    }
                    h3 {
                        font-size: 1.2em;
                        color: #777;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                        font-weight: normal;
                        margin-top: 0.7em;
                        margin-bottom: 0.4em;
                    }
                    div.feature p {
                        margin: 0.8em 0;
                    }
                    span.feature {
                        font-style: italic;
                        color: #333;
                    }
                    .feature .even {
                        margin-left: 5%;
                        padding-right: 2.5%;
                    }
                    div.feature {
                        float: left;
                        width: 45%;
                    }
                }

            }
        }

    }
</style>