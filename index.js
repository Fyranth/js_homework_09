let express = require('express');
let app = express();
app.use(express.static('public'));
app.listen(3000);
//http://127.0.0.1:3000/