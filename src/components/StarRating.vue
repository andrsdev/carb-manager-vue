<template>
  <div>
    <img
      v-for="n in fullStars"
      class="star"
      src="../assets/star-full.svg"
      :key="`star-full-${n}`"
    />
    <img
      v-for="n in halfStars"
      class="star"
      src="../assets/star-half.svg"
      :key="`star-half-${n}`"
    />
    <img
      v-for="n in emptyStars"
      class="star"
      src="../assets/star-empty.svg"
      :key="`star-empty-${n}`"
    />
  </div>
</template>

<script>
export default {
  props: {
    score: {
      type: Number
    }
  },

  methods: {
    calculateStars() {
      this.fullStars = Math.trunc(this.score);
      this.halfStars = this.score % 1 >= 0.5 ? 1 : 0;
      this.emptyStars = 5 - this.fullStars - this.halfStars;
    }
  },

  data() {
    return {
      emptyStars: 5,
      fullStars: 0,
      halfStars: 0
    };
  },

  created() {
    this.calculateStars();
  }
};
</script>

<style scoped>
.star {
  width: 12px;
}

.star ~ .star {
  margin-left: 1px;
}
</style>
