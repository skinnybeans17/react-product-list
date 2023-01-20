import data from './data.json';
const allCategories = data.map(obj => obj.category);

const categorieSet = new Set(allCategories);

const categoriesUnique = Array.from(categorieSet);

const categoriesWithCounts = allCategories.reduce((obj, cat) => {
    if (obj[cat.category]) {
        obj[cat.category] = 1
    } else {
        obj[cat.category] += 1
    }
    return obj
  }, {});

const namesAndCategories = categoriesUnique.map(name => {
    return {
        name, count: categoriesWithCounts[name]
    }
})

export default data;
export { allCategories, categoriesUnique, categorieSet, namesAndCategories, categoriesWithCounts }