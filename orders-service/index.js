const express = require("express");
const app = express();
const port = 3002;

app.get("/orders", (req, res) => {
  console.log("call service");

  res.json({
    data: [{ id: 1, userId: 1, orderQty: 10, orderPrice: 100 }],
  });
});

app.listen(port, () => {
  console.log(`Orders service running on http://localhost:${port}`);
});
