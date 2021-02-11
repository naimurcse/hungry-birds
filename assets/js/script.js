//Search Items
const searchMeal = () => {
    const searchMeals = document.getElementById('input-meal').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeals}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    const showMeals = document.getElementById('show-meals');
    
meals.forEach(meal => {
    
    const mealsContainer = document.createElement('div');
    mealsContainer.className = 'meal';
    
    const mealsInfo = `
    <img src="${meal.strMealThumb}">
    <h2>${meal.strMeal}</h2>
    `;
    mealsContainer.innerHTML = mealsInfo;

    showMeals.appendChild(mealsContainer);
    });
    
    
};