// STEP 1: Create an express server

// STEP 2: Create a GET api that returns query param, path param and return both values with info as json

// STEP 3: Create a POST api which acccepts a JSON data. Return an array of data.

const express = require('express');
const app = express();
const PORT = 8000;

// Parse json middleware
app.use(express.json());

// get api with query and path param
app.get('/:id', (req, res) => {

    // http://localhost:8000/586?name=John
    //for abve given query reponse: {"path_param":"586","query_param":"John"}
    const pathParam = req.params.id;
    const queryParam = req.query.name;

    res.json({
        path_param: pathParam,
        query_param: queryParam,
    });
});

// post api accepting json data 
app.post('/data', (req, res) => {
    const data = req.body;
    console.log(`data posted ${data}`);
    // Returning of array of json
    res.json([data]);


});

// Starting server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
