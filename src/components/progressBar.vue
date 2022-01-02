<template>
  <div class="loadingBar" >
    <div @click="toggleNav"
      class="percentage" 
      :class="{'percentageDark': darkMode}"
      :style="percentageWidth" 
    >
      <span
        :class="{'spanDark': darkMode}"
      > 
        {{ skillName }} 
      </span>
    </div>
  </div>
</template>

<script>


export default {
    name : 'ProgressBar' ,
    props: {
    skillName: {
      type: String,
      default: () => {
        return ''
      }
    },
    width: {
      type: Number,
      default: () =>{
        return 0
      }
    },
    darkMode:{
      type:Boolean,
      default: () =>{
        return false
      }
    }
    },
  computed: {
    percentageWidth(){
      return{
        width: `${this.width}px`
      };
    }
  },

  methods: {
      toggleNav : function(){
        console.log(this.darkMode)
      },
}
}
</script>

<style scoped>
.loadingBar{
    position: relative;
    width: 400px;
    height: 30px;
    border-radius: 15px;
    overflow: hidden;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 1px 2px 4px rgb(99, 96, 96);
    border: 1px solid rgb(2, 9, 6);
}

.percentage{
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    background-color: rgba(144, 80, 173, 0.329);
    display: block;
    height: 100%;
    /* width: 50% ; */
    border-radius: 15px;
    background-size: 30px 30px ;

}

.percentageDark{
  background-color: rgba(169, 124, 221, 0.952);
}

.percentage span{
  float: left;
  margin: 4px 17px;
  font-size: 17px;
  color: rgba(56, 54, 54, 0.87);
}

.spanDark{
  color: rgba(0, 0, 0, 0.808) !important;
}

@media screen and (max-width: 483px) {
  .loadingBar{
    width: 200px;
  }
}

</style>