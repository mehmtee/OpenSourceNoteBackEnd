const noteRouter = require("./noteRouter");
const userRouter = require("./userRouter");
const loginRouter = require("./loginRouter");
module.exports = (app) => {
  app.use("/note", noteRouter);
  app.use('/user', userRouter);
  app.use('/login',loginRouter);
};
