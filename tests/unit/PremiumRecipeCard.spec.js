import { shallowMount } from "@vue/test-utils";
import flushPromises from "flush-promises";
const fetchMock = require("jest-fetch-mock");
const { recipe } = require("../mocks/recipe");
import PremiumRecipeCard from "../../src/components/PremiumRecipeCard.vue";

fetchMock.enableFetchMocks();

describe("PremiumRecipeCard.vue", () => {
  fetch.mockResponse(JSON.stringify(recipe));
  const wrapper = shallowMount(PremiumRecipeCard);

  it("renders correctly", async () => {
    await flushPromises();
    expect(wrapper.element).toMatchSnapshot();
  });

  it("fetch recipe data", async () => {
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://60c10ba2b8d367001755666e.mockapi.io/recipe/1"
    );
  });

  it("renders title", async () => {
    await flushPromises();
    expect(wrapper.text()).toContain(recipe.title);
  });

  it("shows Calories when energyUnits is 'calories'", async () => {
    wrapper.setProps({ energyUnits: "calories" });
    await flushPromises();
    expect(wrapper.text()).toContain("Calories");
  });

  it("shows Kilojoules when energyUnits is 'kilojoules'", async () => {
    wrapper.setProps({ energyUnits: "kilojoules" });
    await flushPromises();
    expect(wrapper.text()).toContain("Kilojoules");
  });
});
