<template>
  <div class="addTask">
    <div class="wrapper">
      <div class="select-wr">
        <v-select v-model="selected" :options="['foo','bar']"></v-select>
        <basic-select :options="options"
                      :selected-option="item"
                      placeholder="select item"
                      @select="onSelect">
        </basic-select>
      </div>
      <task/>
      <task/>
      <task/>

    </div>
  </div>
</template>

<script>
  import { BasicSelect } from 'vue-search-select'
  import vSelect from 'vue-select'
  import task from './task'



  export default {
  name: 'addTask',
  data () {
    return {
      selected: 'name',
      options: [
        { value: '1', text: 'aa' + ' - ' + '1' },
        { value: '2', text: 'ab' + ' - ' + '2' },
        { value: '3', text: 'bc' + ' - ' + '3' },
        { value: '4', text: 'cd' + ' - ' + '4' },
        { value: '5', text: 'de' + ' - ' + '5' }
      ],
      searchText: '',
      item: {
        value: '',
        text: ''
      }
    }
  },
    methods: {
      //for Vue select
      onSelect (item) {
        this.item = item
      },
      reset () {
        this.item = {}
      },
      selectOption () {
        // select option from parent component
        this.item = this.options[0]
      }


    },
    components: {
      BasicSelect,
      vSelect,
      task
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .addTask{
    padding-top: 55px;
    width: 100%;
    max-width: 380px;
    .wrapper{
      .select-wr{
        display: flex;
        margin-bottom: 70px;
        .dropdown{
          position: relative;
          border-radius: 0;
          border:none!important;
          width: 140px;
          height: 30px;
          background-color: #ffffff;
          margin-right: 20px;
          box-sizing: border-box;
          .dropdown-toggle{
            border: none;
            border-radius: 0;
            height: 100%;
            .selected-tag{
              height: 100%;
              margin: 0;
            }
            .open-indicator{
              display: block;
              width: 8px;
              height: 4px;
              right: 11px;
              bottom: auto;
              top: 16px;
              &:before{
                display: none;
              }
              &:after{
                content: '';
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 4px 4px 0 4px;
                border-color: #000000 transparent transparent transparent;

              }
            }
            .clear{
              display: none;
            }
            .dropdown-menu{
              width: 140px!important;
            }
          }
          .menu{
            border: none!important;
            .item{
                padding: 5px 10px!important;
            }
          }
        }
      }

    }
  }

</style>
