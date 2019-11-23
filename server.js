const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({msg: 'App running'}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server starting on port: ${PORT}`));
