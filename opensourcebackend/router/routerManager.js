const noteRouter = require("./noteRouter");
const userRouter = require("./userRouter");
module.exports = (app) => {
  app.use("/note", noteRouter);
  app.use('/user', userRouter);
};
