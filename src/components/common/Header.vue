<template>
  <div class="octoon_head">
      <div class="logo">
          LOGO
      </div>
      <div class="octoon_menu">
          <el-menu :default-active="activeIndex" text-color="#ffffff" active-text-color="#DDDDDD" background-color="#4B4B4B" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">Download</el-menu-item>
            <el-menu-item index="2">Buy</el-menu-item>
            <el-menu-item index="3">Support</el-menu-item>
        </el-menu>
      </div>
  </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            activeIndex: '1',
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="scss">
    .octoon_head {
        position: relative;
        width: 100%;
        display: flex;
        .logo {
            width: 70%;
            height: 60px;
            background-color: #4B4B4B;
        }
        .octoon_menu {
            width: 30%;
        }
    }
</style>