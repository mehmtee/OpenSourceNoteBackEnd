const noteRouter = require("./noteRouter");
module.exports = (app) => {
  app.use("/note", noteRouter);
};
