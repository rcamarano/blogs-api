const express = require('express');
const { 
  loginRouter, 
  userRouter, 
  categoryRouter,
  postRouter,
 } = require('./routes');
// const userRouter = require('./routes/UserRoute');
// const bodyParser = require('body-parser');
// const apiRoutes = require('./routes');

// ...

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use(apiRoutes);
// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
