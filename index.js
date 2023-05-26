const express = require('express')
const app = express()
const port = 3000
const chef = require('./data/chef.json')
const recipe = require('./data/recipe.json')
const latest = require('./data/latest.json')
const cors = require('cors')
app.get('/', (req, res) => {
    res.send('Foodie-Frenzy-Server is running')
})

app.use(cors())

app.get('/chef', (req, res) => {
    res.send(chef)
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(chef)
    }
    else {
        const selectedChefRecipe = recipe.filter(c => c.chefId == id)
        res.send(selectedChefRecipe)
    }

})
app.get('/recipe', (req, res) => {
    res.send(recipe)
})

app.get('/recipe/:id', (req, res) => {
    const id = req.params.id
    if (id == 0) {
        res.send(recipe)
    }
    else {
        const selectedRecipe = recipe.find(r => r.recipeId == id)
        res.send(selectedRecipe)
    }
})

app.get('/latest', (req, res) => {
    res.send(latest)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})