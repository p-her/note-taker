const express = require('express');
const PORT = process.env.PORT || 3001;
const htmlRoutes = require('./routes/htmlRoutes')
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', htmlRoutes);


app.listen(PORT , () => {
    console.log(`Server started on port ${PORT}`);
})
