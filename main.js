const searchForm = document.querySelector('form')
const searchResultDiv = document.querySelector('.search_result')
const container = document.querySelector('.container')

let searchQuery = ''


const app_id = '08f1eb17'
const api_key = '3adadb483c0d2d35584df0c9095d1f97'



searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    searchQuery = e.target.querySelector('input').value
    fetchApi()
})


async function fetchApi() {

    const baseUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${app_id}&app_key=${api_key}&to=20`
    const res = await fetch(baseUrl)
    const data = await res.json()
    generateHtmlFunc(data.hits)

}

function generateHtmlFunc(res) {

    let generateHtml = ''
    res.map(res => {
        generateHtml += `
        
        <div class="item">
             <img src="${res.recipe.image}" alt="">
            <div class="flex_container">
                <h1 class="title">${res.recipe.label}</h1>
                <a href="${res.recipe.url}" class="view">View Recipe</a>
            </div>
            <p class="item_data">
                Calories:${res.recipe.calories.toFixed(2)}
            </p>
            <p class="item_data">
            Diet Label:${res.recipe.dietLabels.length > 0 ? res.recipe.dietLabels : 'No Data Found'}
        </p>
        <p class="item_data">
        Health Label:${res.recipe.healthLabels}
    </p>
    </div>
        `
        searchResultDiv.innerHTML = generateHtml

    })
}