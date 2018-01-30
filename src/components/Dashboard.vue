<template>
  <div class="dashboard">
    <div class="wrapper">
     <mainMenu/>
    <div class="dashboard-body">
      <addTask/>
      <information/>
    </div>

    </div>


  </div>
</template>

<script>
  import mainMenu from './Main-Menu'
  import addTask from './Main/Task-Add'
  import information from './Main/Task-Information'

  export default {
  name: 'dashboard',
  data () {
    return {
    }
  },
  methods:{

  },
  components: {
    mainMenu,
    addTask,
    information
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .dashboard{
    .wrapper{
      box-sizing: border-box;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      max-width: 1000px;
      .mainMenu{
        margin-bottom: 40px;
      }
      .dashboard-body{
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

    }
  }

</style>
