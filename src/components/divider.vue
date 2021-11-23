<template>
  <div class="container">
    <div class="line">
      <div class="diamond" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Divider",
};
</script>

<style scoped>
.container {
  padding: 20px 400px 20px 400px;
}

.line {
  width: 100%;
  height: 45px;
  position: relative;
}

.line::after,
.line::before {
  content: "";
  position: absolute;
  margin: auto;
  height: 2px;
  background: #000;
  width: 45%;
  top: 45%;
}

.line::after {
  left: 0;
}

.line::before {
  right: 0;
}

.diamond {
  height: 40px;
  width: 40px;
  border: 2px solid #000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transform: rotate(45deg);
}

@media (max-width: 768px) {
  .diamond {
    height: 20px;
    width: 20px;
  }

  .line {
    height: 25px;
  }
}
</style>
