const express = require('express');
const app = express();

const rootRoutes = require('./routes');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(rootRoutes);

app.listen(PORT, () => {
  console.log('server runnning on port : ' + PORT);
});