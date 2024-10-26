const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRoute);
app.get('/', (req, res) => {
    res.send("Hello From Node API Server!");
});

mongoose.connect("mongodb+srv://sarahmohamedali56:9ugJ0sunSdXVdx1I@backenddb.wcytj.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch(() => {
    console.log("Error connecting to MongoDB");
});