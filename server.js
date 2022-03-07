const app = require("./app");

// const PORT = process.env.PORT || 3000;
const { PORT = 9090 } = process.env;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
