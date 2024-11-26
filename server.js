const express = require('express');
const app = express();
const port = 8000;

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
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
