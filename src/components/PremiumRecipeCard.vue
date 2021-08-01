<template>
  <div v-if="data" class="card">
    <div class="header">
      <img class="header__img" :src="data.image" :alt="data.title" />
      <div class="header__overlay"></div>
      <img
        class="header__heart-icon"
        alt="heart-button"
        src="../assets/heart-outline.svg"
      />
      <div class="tag">
        <img class="tag__icon" alt="trohpy icon" src="../assets/trophy.svg" />
        <span class="tag__text">Premium Recipe</span>
      </div>
    </div>
    <div class="content">
      <h3 class="content__title">{{ data.title }}</h3>
      <div class="rating">
        <StarRating :score="data.rating.score" />
        <span class="rating__count">{{ data.rating.count }} ratings</span>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "./StarRating.vue";

export default {
  components: {
    StarRating
  },

  data() {
    return {
      loading: true,
      error: null,
      data: null
    };
  },

  methods: {
    async getData() {
      const url = "https://60c10ba2b8d367001755666e.mockapi.io/recipe/1";
      try {
        const response = await fetch(url).then(data => data.json());
        console.log(response);

        this.data = { ...response };
      } catch (error) {
        this.error = error;
      }
    }
  },

  created() {
    this.getData();
  }
};
</script>

<style scoped>
.card {
  cursor: pointer;
  width: 343px;
  background-color: white;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  border-radius: 12px;
}

.card:hover .header__overlay {
  background-color: rgba(255, 255, 255, 0.3);
}

.header {
  position: relative;
  width: 100%;
  height: 200px;
}

.header__overlay {
  position: absolute;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(22, 27, 35, 0.2) 70.94%,
    rgba(26, 29, 34, 0.79) 106.25%
  );
  inset: 0;
}

.header__heart-icon {
  position: absolute;
  top: 16px;
  right: 16px;
}

.header__img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  object-fit: cover;
}

.content {
  text-align: left;
  padding: 16px;
  padding-top: 12px;
}

.content__title {
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tag {
  display: flex;
  align-items: center;
  position: absolute;
  left: 8px;
  bottom: 8px;
  color: white;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 4px 10px;
  border-radius: 100px;
}

.tag__icon {
  height: 12px;
  margin-right: 4px;
}

.tag__text {
  font-size: 12px;
  font-weight: 600;
}

.rating {
  margin-top: 16px;
  display: flex;
  align-items: center;
}

.rating__count {
  margin-left: 8px;
  font-weight: 500;
  color: #1CA677;
}
</style>
