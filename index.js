const express = require('express');
const app = express();
const path = require('path');


app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')



const comments = [
        {
        username: 'Dolly',
        comment: 'Woo i got a new pet'
    },
    
    {
        username: 'Molly',
        comment: 'Today is my dogs 1st Birthday'
    },

    {
        username: 'Colt',
        comment: 'Happy Day for me'
    },
    
    {
        username: 'Liam',
        comment: 'Going for the trip'
    },
    
    {
        username: 'Olivia',
        comment: 'I backed my first cake'
    },
    
    {
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
    comments.push({ username, comment });
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {    
    
})

app.listen(8080, () => {
    console.log('Listening on the Port 8080')
})