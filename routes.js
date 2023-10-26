const {
  getAllCartoons,
  getCartoonById,
  createCartoon,
  updateCartoon,
  deleteCartoon,
} = require("./controller");

module.exports = function (app) {
  app.get("/cartoon/api/v1/cartoons", getAllCartoons);

  app.get("/cartoon/api/v1/cartoons/:id", getCartoonById);

  app.post("/cartoon/api/v1/cartoons", createCartoon);

  app.put("/cartoon/api/v1/cartoons/:id", updateCartoon);

  app.delete("/cartoon/api/v1/cartoons/:id", deleteCartoon);
};
