export default interface category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface categories {
  categories: Array<category>;
}

export interface OneCategorie {
  meals: Array<OneCategorieDetail>;
}

export interface OneCategorieDetail {
  strMeal?: string;
  strMealThumb?: string;
  idMeal?: string;
}
