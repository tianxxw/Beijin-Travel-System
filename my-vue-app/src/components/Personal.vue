<script>
 import settingVue from '../view/manage/personal/index.vue'
  export default{
    data() {
     return {
      comName:'settingVue',
      cssPath:0
     }
    },
    components:{
     settingVue
    },  
    created() {
     
    },
    mounted() {
 
    },
    methods:{
 
    }
  }
  </script>
 <template>
  <div class="content">
    <keep-alive>
     <component :is="comName" style="margin: 0px 10px;"></component>
    </keep-alive>
  </div>
 </template>
 <style scoped lang="less">
  .content {
   background-color: white;
   height: 100%;
   width: 100%;
   border-radius: 2px;
  }
 </style>