<template>
  <div class="wrapper">
    <div class="nutrient">
      <div class="dot red" />
      <span>{{ this.carbs }}g</span>
    </div>
    <div class="nutrient">
      <div class="dot blue" />
      <span>{{ this.fats }}g</span>
    </div>
    <div class="nutrient">
      <div class="dot yellow" />
      <span>{{ this.proteins }}g</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    carbs: {
      type: Number
    },
    fats: {
      type: Number
    },
    proteins: {
      type: Number
    }
  }
};
</script>

<style scoped>
.wrapper,
.nutrient {
  display: flex;
  align-items: center;
}

.nutrient ~ .nutrient {
  margin-left: 8px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 100px;
  margin-right: 4px;
}

.red {
  background-color: #f94642;
}

.blue {
  background-color: #3177bb;
}

.yellow {
  background-color: #FDA120;
}
</style>
