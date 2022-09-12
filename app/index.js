const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/user.js');
const PORT = 3001

/* Middlewares */

app.set("json spaces",2);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

/* Router */

app.use('/user', userRouter);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));