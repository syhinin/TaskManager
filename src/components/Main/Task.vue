<template>
  <div class="task">
    <div class="task-head">
      <span class="task-tag"></span>
      <div class="task-title">Title Task</div>
    </div>
    <div class="task-body">
      <div class="task-body-item task-date">Today</div>
      <div class="task-body-item task-project">ThinkWider</div>
    </div>

  </div>
</template>

<script>

  export default {
  name: 'task',
  data () {
    return {

    }
  },
    methods: {

    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .task{
    height: 48px;
    border-bottom: 1px solid rgba(170, 166, 151, 0.2);
    margin-bottom: 12px;
    .task-head{
      display: flex;
      margin-bottom: 4px;
      .task-tag{
        margin-top: 3px;
        margin-right: 10px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #aaa697;
        &.normal{
          background-color: #7fc763;
        }
        &.heigh{
          background-color: #ff5a67;
        }
        &.low{
          background-color: #aaa697;
        }

      }
      .task-title{
        height: 20px;
        color: #000000;
        font-size: 15px;
        font-weight: 600;
      }
    }
    .task-body{
      box-sizing: border-box;
      display: flex;
      padding-left: 25px;
      .task-body-item{
        border-left:1px solid #aaa697;
        box-sizing: border-box;
        padding: 0 7px;
        color: #aaa697;
        font-weight: 400;
        cursor: pointer;
        height: 16px;
        &:first-of-type{
          border-left:none;
          padding-left: 0px;
        }

      }

    }

  }

</style>
