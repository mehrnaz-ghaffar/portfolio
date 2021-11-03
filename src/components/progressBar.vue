<template>
    <div class="loadingBar">
        <div class="percentage">
            
        </div>

    </div>
</template>

<script>
export default {
    name : 'ProgressBar' ,

    
}
</script>

<style scoped>
.loadingBar{
    position: relative;
    widows: 400px;
    height: 30px;
    border-radius: 15px;
    overflow: hidden;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 1px 2px 4px rgb(184, 182, 182)
}

.percentage{
    
}

</style>