const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("./public"));

app.get('/', (req, res) => res.sendfile("./public/root.html"));

app.listen(port, () => console.log(`Server started on port ${port}`));