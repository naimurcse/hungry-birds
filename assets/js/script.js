//Search Items
const searchItem = () => {
    const searchItem = document.getElementById('input-items').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`;
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}