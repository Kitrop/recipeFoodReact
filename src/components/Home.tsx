import {useDispatch} from "react-redux";
import {updateFormData} from "../redux/slices/formSlice";
import React from "react";
import {useNavigate} from "react-router-dom";
import home from '../styles/home.module.css'

const Home = () => {


  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem('data', JSON.stringify(data))
    dispatch(updateFormData(data))
    navigate('/recipes')
  }

  return (
    <>
      <form className={home.form} name={'form'} onSubmit={handleSubmit}>
        <div>
          <label>Enter the ingredient(s)</label><br/>
          <input className={home.soloInput} name={'q'} id={'q'} type={"text"} placeholder={"enter the ingredient"}/>
        </div>
        <div>
          <label>Enter the minimum and maximum amounts of ingredients</label><br/>
          <input style={{marginRight: 10 + 'px'}} className={home.input} name={'minIngredients'} type={"text"} placeholder={"Enter the minimum number of ingredients "}/>
          <input className={home.input} name={'maxIngredients'} type={"text"} placeholder={"Enter the maximum number of ingredients "}/>
        </div>
        <div>
          <select name={'diet'} defaultValue={""}>
            <option value={""}></option>
            <option value={"balanced"}>balanced</option>
            <option value={"high-fiber"}>high fiber</option>
            <option value={"low-carb"}>low carb</option>
            <option value={"high-protein"}>high-protein</option>
            <option value={"low-fat"}>low-fat</option>
            <option value={"low-sodium"}>low-sodium</option>
          </select>
        </div>
        <div>
          <select name={'health'} defaultValue={""}>
            <option value=""></option>
            <option value="alcohol-cocktail"> alcohol-cocktail</option>
            <option value="alcohol-free"> alcohol-free</option>
            <option value="celery-free"> celery-free</option>
            <option value="crustacean-free"> crustacean-free</option>
            <option value="dairy-free"> dairy-free</option>
            <option value="DASH"> DASH</option>
            <option value="egg-free"> egg-free</option>
            <option value="fish-free"> fish-free</option>
            <option value="fodmap-free"> fodmap-free</option>
            <option value="gluten-free"> gluten-free</option>
            <option value="immuno-supportive"> immuno-supportive</option>
            <option value="keto-friendly"> keto-friendly</option>
            <option value="kidney-friendly"> kidney-friendly</option>
            <option value="kosher"> kosher</option>
            <option value="low-fat-abs"> low-fat-abs</option>
            <option value="low-potassium"> low-potassium</option>
            <option value="low-sugar"> low-sugar</option>
            <option value="lupine-free"> lupine-free</option>
            <option value="Mediterranean"> Mediterranean</option>
            <option value="mollusk-free"> mollusk-free</option>
            <option value="mustard-free"> mustard-free</option>
            <option value="no-oil-added"> no-oil-added</option>
            <option value="paleo"> paleo</option>
            <option value="peanut-free"> peanut-free</option>
            <option value="pescatarian"> pescatarian</option>
            <option value="pork-free"> pork-free</option>
            <option value="red-meat-free"> red-meat-free</option>
            <option value="sesame-free"> sesame-free</option>
            <option value="shellfish-free"> shellfish-free</option>
            <option value="soy-free"> soy-free</option>
            <option value="sugar-conscious"> sugar-conscious</option>
            <option value="sulfite-free"> sulfite-free</option>
            <option value="tree-nut-free"> tree-nut-free</option>
            <option value="vegan"> vegan</option>
            <option value="vegetarian"> vegetarian</option>
            <option value="wheat-free"> wheat-free</option>
          </select>
        </div>
        <div>
          <select name={'cuisineType'} defaultValue={""}>
            <option  value=""></option>
            <option value="American"> American</option>
            <option value="Asian"> Asian</option>
            <option value="British"> British</option>
            <option value="Caribbean"> Caribbean</option>
            <option value="Central Europe"> Central Europe</option>
            <option value="Chinese"> Chinese</option>
            <option value="Eastern Europe"> Eastern Europe</option>
            <option value="French"> French</option>
            <option value="Indian"> Indian</option>
            <option value="Italian"> Italian</option>
            <option value="Japanese"> Japanese</option>
            <option value="Kosher"> Kosher</option>
            <option value="Mediterranean"> Mediterranean</option>
            <option value="Mexican"> Mexican</option>
            <option value="Middle Eastern"> Middle Eastern</option>
            <option value="Nordic"> Nordic</option>
            <option value="South American"> South American</option>
            <option value="South East Asian"> South East Asian</option>
          </select>
        </div>
        <div>
          <select name={'mealType'} defaultValue={""}>
            <option  value=""></option>
            <option value="Breakfast">Breakfast</option>
            <option value="Dinner">Dinner</option>
            <option value="Lunch">Lunch</option>
            <option value="Snack">Snack</option>
            <option value="Teatime">Teatime</option>
          </select>
        </div>
        <div>
          <select name={'dishType'} defaultValue={""}>
            <option  value=""></option>
            <option value="Biscuits and cookies"> Biscuits and cookies</option>
            <option value="Bread"> Bread</option>
            <option value="Cereals"> Cereals</option>
            <option value="Condiments and sauces"> Condiments and sauces</option>
            <option value="Desserts"> Desserts</option>
            <option value="Drinks"> Drinks</option>
            <option value="Main course"> Main course</option>
            <option value="Pancake"> Pancake</option>
            <option value="Preps"> Preps</option>
            <option value="Preserve"> Preserve</option>
            <option value="Salad"> Salad</option>
            <option value="Sandwiches"> Sandwiches</option>
            <option value="Side dish"> Side dish</option>
            <option value="Soup"> Soup</option>
            <option value="Starter"> Starter</option>
            <option value="Sweets"> Sweets</option>
          </select>
        </div>
        <div>
          <input name={'minCalories'} type="text" placeholder={"Enter the minimum calories"}/>
          <input name={'maxCalories'} type="text" placeholder={"Enter the maximum calories"}/>
        </div>
        <div>
          <input name={'minTime'} type="text" placeholder={"Enter the minimum time in minutes for cooking"}/>
          <input name={'maxTime'} type="text" placeholder={"Enter the minimum time in maximum for cooking"}/>
        </div>
        <button type={'submit'}>Button</button>
      </form>
    </>
  );
}

export default Home;
