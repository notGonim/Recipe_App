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

    const baseUrl = `https://api.edamam.com/search?q=pizza&app_id=${app_id}&app_key=${api_key}`
    const res = await fetch(baseUrl)
    const data = await res.json()
    console.log(data)




}