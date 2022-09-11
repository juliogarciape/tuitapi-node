const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001

app.use(cors());

app.get('/', (req,res) => {
    return res.send({
        saludo: "Hola"
    })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))