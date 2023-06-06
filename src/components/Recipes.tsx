import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {useGetQuestionsQuery} from "../redux/api/api";
import {Fragment, useEffect} from "react";
import styles from '../styles/Recipes.module.css';
import Loading from "./Loading";

const Recipes = () => {
  const formData = useSelector((state: RootState) => state.form)

  const filterParams: any = {
    "type": "public",
    app_id: "d62a4e57",
    app_key: "1422cefdc48bfa37b6ea14d46a65188f",
  };

  const formFields = [
    {field: "q", param: "q"},
    {field: "minIngredients", param: "countIngr"},
    {field: "maxIngredients", param: "countIngr"},
    {field: "diet", param: "diet"},
    {field: "health", param: "health"},
    {field: "cuisineType", param: "cuisineType"},
    {field: "mealType", param: "mealType"},
    {field: "dishType", param: "dishType"},
    {field: "minTime", param: "time"},
    {field: "maxTime", param: "time"},
  ];

  formFields.forEach(({field, param}) => {
    // @ts-ignore
    const value = formData[field];
    if (value !== undefined && value !== "") {
      if (param === "countIngr" || param === "time") {
        if (!filterParams[param]) {
          filterParams[param] = `${value}`;
        } else {
          filterParams[param] += `-${value}`;
        }
      } else {
        filterParams[param] = value;
      }
    }
  });

  const {data, isLoading, error} = useGetQuestionsQuery(filterParams)

  const ResultRecipe = () => {
    if (data && data.hits.length > 0) {
      return (
        <Fragment>
          <div className={styles.wrapper}>
            {data.hits.map((r) => (
              <div className={styles.container} key={r.recipe.label}>
                <div>
                  <img src={r.recipe.image} alt={r.recipe.label + " photo"}/>
                </div>
                <span className={styles.label}>{r.recipe.label}</span>
                <div>
                  <h3>Cooking time:</h3>
                  <p>{r.recipe.totalTime}</p>
                  <h3>Calories:</h3>
                  <p>{Math.round(r.recipe.calories)}</p>
                  <h3>Cuisine type:</h3>
                  <p>{r.recipe.cuisineType}</p>
                  <h3>Meal type:</h3>
                  <p>{r.recipe.mealType}</p>
                  <h3>Dish type:</h3>
                  <p>{r.recipe.dishType}</p>
                </div>
                <div>
                  <h3>Ingredients:</h3>
                  {r.recipe.ingredients.map((i) => <div>{i.food}</div>)}
                </div>
                <div className={styles.wrapper_btn}>
                  <a className={styles.button} href={r.recipe.shareAs}>Подробнее</a>
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      );
    } else if (isLoading) {
      return (
        <Loading/>
      )
    } else {
      return <div className={styles.notFound}> Ничего не найдено</div>;
    }
  };


  return (
    <div>
      <ResultRecipe/>
    </div>
  )
}

export default Recipes;