const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment,getFortune,getCars,addCars,deleteCars,editCars } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/fortune/',getFortune)
app.get('/api/cars',getCars)
app.post('/api/addCars', addCars)
app.delete('/api/deleteCars/:id',deleteCars)
app.put('/api/editCars/:id',editCars)

app.listen(4000, () => console.log("Server running on 4000"));
