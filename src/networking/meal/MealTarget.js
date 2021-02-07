import MealsApi from '../MealsApi';

const MealTarget = {
  getMeals: async (categoryId) => {
    var dataToParse = null;
    const path = '/meals.json';

    try {
      const response = await MealsApi.get(path);
      dataToParse = response.data;
    } catch (error) {
      throw new Error('Error fetching Meals..');
    }

    const mealsArray = [];
    for (const key in dataToParse) {
        const meal = dataToParse[key];
        meal.id = key
        if (meal.categoryIds.includes(categoryId)) {
            mealsArray.push(meal);
        }
    }
    return mealsArray;
  },
};

export default MealTarget;