<template>
  <div class="switchBox">
    <input 
      id="switchbox"
      type="checkbox" 
    >
    <label 
      for="switchbox" 
      @click="switchToggle()"
    />
  </div>
</template>

<script>
export default {
    name: 'switchBox',

    props:{
      type: Boolean,
      default: () =>{
        return false
      }
    },

    methods:{
      switchToggle: function(){
        this.$emit('darkMode')
      }
    }
}
</script>

<style scoped>

input[type="checkbox"]{
    width: 0;
    height: 0;
    visibility: hidden;
}

label{
    display: block;
    width: 64px;
    height: 34px;
    background-color: rgba(91, 62, 129, 0.534);
    border-radius: 100px;
    position: relative;
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 0 0 20px #477a8550;
    bottom: 27px;
    left: 13px;
}

label::after{
    content: "";
    width: 27px;
    height: 27px;
    background-color: #e8f5f7;
    position: absolute;
    border-radius: 70px;
    top: 4px;
    left: 5px;
    transition: 0.5s;
}

input:checked + label::after{
    left: calc(100% - 5px);
    transform: translateX(-100%);
}

input:checked + label {
   background-color: rgba(95, 60, 141, 0.774);
}

</style>