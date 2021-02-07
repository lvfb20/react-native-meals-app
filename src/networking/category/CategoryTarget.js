import MealsApi from '../MealsApi';

const CategoryTarget = {
  getCategories: async () => {
    var dataToParse = null;
    const path = '/categories.json';

    try {
      const response = await MealsApi.get(path);
      dataToParse = response.data;
    } catch (error) {
      throw new Error('Error fetching Categories..');
    }

    const categoriesArray = [];
    for (const key in dataToParse) {
        const category = dataToParse[key];
        category.id = key
        categoriesArray.push(category);
    }
    return categoriesArray;
  },
};

export default CategoryTarget;
