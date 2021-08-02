import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";

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
    energyUnits: {
      default: select("energyUnits", ["calories", "kilojoules"]),
    },
  },

  template:
    '<PremiumRecipeCard :isFavorite="isFavorite" :energyUnits="energyUnits"/>',
  methods: { action: action("clicked") },
});
