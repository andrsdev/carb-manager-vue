import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { PremiumRecipeCard },

  props: {
    isFavorite: {
      default: boolean("isFavorite", false),
    },
  },

  template: '<PremiumRecipeCard :isFavorite="isFavorite"/>',
  methods: { action: action("clicked") },
});
