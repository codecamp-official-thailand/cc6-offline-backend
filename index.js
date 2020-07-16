const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', todoRoutes);

app.listen(8000, () => {
    console.log("Server is running at port 8000");
});
