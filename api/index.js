const app = require("./app");
const sequelize = require("./src/core/database/db.js");


const PORT = process.env.PORT;

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);

  sequelize
    .sync({ force: false })
    .then(() => {
      
      console.log("Nos hemos conectado a la base de datos");
    })
    .catch((error) => {
      console.log("Se ha producido un error", error);
    });
});