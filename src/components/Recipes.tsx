import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {useGetQuestionsQuery} from "../redux/api/api";
import {Fragment, useEffect} from "react";

const Recipes = () => {
  const formData = useSelector((state: RootState) => state.form)

  const filterParams: any = {
    "type": "public",
    app_id: "d62a4e57",
    app_key: "1422cefdc48bfa37b6ea14d46a65188f",
  }

  if (formData.q !== undefined && formData.q !== "") {
    filterParams.q = formData.q
  }
  if ((formData.minIngredients !== undefined && formData.maxIngredients !== undefined) && (formData.minIngredients !== "" && formData.maxIngredients !== "")) {
    filterParams.countIngr = `${formData.minIngredients}-${formData.maxIngredients}`;
  }
  if (formData.diet !== undefined && formData.diet !== "") {
    filterParams.diet = formData.diet
  }
  if (formData.health !== undefined && formData.health !== "") {
    filterParams.health = formData.health
  }
  if (formData.cuisineType !== undefined && formData.cuisineType !== "") {
    filterParams.cuisineType = formData.cuisineType
  }
  if (formData.mealType !== undefined && formData.mealType !== "") {
    filterParams.mealType = formData.mealType
  }
  if (formData.dishType !== undefined && formData.dishType !== "") {
    filterParams.dishType = formData.dishType
  }
  if ((formData.minTime !== undefined && formData.maxTime !== undefined) && (formData.minTime !== "" && formData.maxTime !== "")) {
    filterParams.time = `${formData.minTime}-${formData.maxTime}`;
  }

  console.log(filterParams)
  const {data, isLoading, error} = useGetQuestionsQuery(filterParams)
  console.log(useGetQuestionsQuery(filterParams))
  const ResultRecipe = () => {
    if (data && data.hits.length > 0) {
      return (
        <Fragment>
          {data.hits.map((r) => (
            <div key={r.recipe.label}>
              <span>{r.recipe.label}</span>
              <div>
                <a href={r.recipe.shareAs}>PPPPPPPPPP</a>
                <img src={r.recipe.image} alt={r.recipe.label + " photo"} />
              </div>
            </div>
          ))}
        </Fragment>
      );
    } else {
      return <div>Ничего не найдено</div>;
    }
  };


  return (
    <div>
      <ResultRecipe />
    </div>
  )
}

export default Recipes;