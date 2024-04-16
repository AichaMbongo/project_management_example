const express = require('express');
const app = express();
const port = 3000;

// // Import catRoutes module
// const catRoutes = require('./routes/cat_router');

// Route middleware
app.use('/api', catRoutes);

app.get('/', (req, res) => {
  res.send('Hello Aicha Zindamoyen!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
