const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req,res)=>{
  res.send('Hello Course Project!!');
});

app.get('/api', (req,res)=>{
    res.send('This Will Change!');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});