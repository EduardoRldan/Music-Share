const express = requerie('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Music Service');
});

app.listen(port, ()=>{
    console.log('Music service listening at http://localhost:${port}');
});