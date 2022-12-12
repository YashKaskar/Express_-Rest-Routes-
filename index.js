const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid'); //for random passing id 


app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')



const comments = [
        {
        id : uuid(),
        username: 'Dolly',
        comment: 'Woo i got a new pet'
    },
    
    {
    id : uuid(),
    username: 'Molly',
    comment: 'Today is my dogs 1st Birthday'
    },

    {
    id : uuid(),
    username: 'Colt',
    comment: 'Happy Day for me'
    },
    
    {
    id : uuid(),
    username: 'Liam',
    comment: 'Going for the trip'
    },
    
    {
    id : uuid(),
    username: 'Olivia',
    comment: 'I backed my first cake'
    },
    
    {
    id : uuid(),
        username: 'Noah',
        comment: 'I planned one for tree'
    }
    
    
]
app.get('/comments', (req, res) => {
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments',(req, res) => {    
    const { username, comment } = req.body;
    comments.push({ username, comment, id:uuid() }); // this is just the example real data come from database
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {    
    const { id } = req.params;
    const comment = comments.find(comment => comment.id === id)
    res.render('comments/show', {comment})
})


app.patch('/comments/:id', (req, res) => {
    res.render('It worked and updating');
})

app.listen(8080, () => {
    console.log('Listening on the Port 8080')
})