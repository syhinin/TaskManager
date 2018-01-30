<template>
  <div class="mainMenu">
   <div class="logo">doitbetter</div>
    <div class="menu-control">
      <div :class="{active: menuControl}" @click="triggerMenu()" class="menu-item">Actual</div:>
      <div :class="{active: !menuControl}" @click="triggerMenu()" class="menu-item">Archive</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'mainMenu',
  data () {
    return {
      menuControl: true,
    }
  },
  methods:{
    triggerMenu: function () {
      this.menuControl = !this.menuControl
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .mainMenu{
    position: relative;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(170,166,151, 0.2);
    .logo{
      position: absolute;
      left: 0;
      top:50%;
      transform: translateY(-50%);
      background: #000;
      height: 20px;
      line-height: 20px;
      padding: 0 3px;
      color:#fff;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
    }
    .menu-control{
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      .menu-item{
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 7px;
        color: #aaa697;;
        font-weight: 700;
        text-transform: uppercase;
        margin: 0 5px;
        cursor: pointer;
        border-bottom: 1px solid transparent;

        &.active{
          color: #000;
          border-bottom: 1px solid #fecd33;
        }
      }
    }

  }

</style>
