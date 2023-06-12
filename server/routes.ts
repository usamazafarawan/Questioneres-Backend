/**
 * initializing all routes.
 * @param app
 */

export const routes = function (app: any) {
  app.use("/api/questionairre", require("./api/questions"));
  app.use("/api/addUser", require("./api/user"));
  app.use("/api/login", require("./api/auth"));
};
