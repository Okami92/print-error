const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/dist`));

app.listen(8080, () => {
  console.log(process.env.NODE_ENV);
});
