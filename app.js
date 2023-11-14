const express = require('express');
const app = express();

// const rootRoutes = require('./routes');

const db = require('./config/db');

const allRoutes = require('./routes')

const PORT = process.env.PORT || 3000;

async function testConnection() {
  try {
    await db.authenticate();
    console.log('konek')
    await db.sync({ force: true});
    // await User.sync({ force:true});
    console.log('model sincron sukses')
  } catch (error) {
    console.error('gk konek')
  }
}

testConnection()

app.use(express.json());
// app.use(rootRoutes);
app.use(allRoutes)

app.listen(PORT, () => {
  console.log('server runnning on port : ' + PORT);
});
