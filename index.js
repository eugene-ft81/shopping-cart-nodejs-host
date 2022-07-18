const express = require('express');
const app = express();
const port = 3080;

app.use(express.static(process.cwd()+"/angular-app/dist/cart/"));

app.get('/', (req,res) => 
  res.sendFile(process.cwd()+"/angular-app/dist/cart/index.html")
);

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});