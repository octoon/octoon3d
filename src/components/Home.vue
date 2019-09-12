<template>
  <div class="home">
        <header>
            <v-header></v-header>
        </header>
        <section :class="{'content-collapse':collapse}">
            <transition name="move" mode="out-in">
                <keep-alive :include="tagsList">
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </section>
        <footer>
            <!-- <v-footer></v-footer> -->
        </footer>
    </div>
</template>

<script>
import vHeader from 'components/common/Header';
import bus from './bus.js'
export default {
    data() {
        return {
            tagsList: [],
            collapse: false,
            isShow: false
        }
    },
    components: {
        vHeader
    },
    created() {
        bus.$on('collapse', msg => {
            this.collapse = msg;
        })
        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        })
    },
    mounted() {

    }
}
</script>

<style lang="scss">
    .home {
        font-size: 16px;
    }
</style>