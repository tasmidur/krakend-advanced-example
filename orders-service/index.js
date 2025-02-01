const express = require("express");
const app = express();
const port = 3002;
app.use(express.json());

app.get("/orders", (req, res) => {
  console.log("call service");

  res.json({
    data: [{ id: 1, userId: 1, orderQty: 10, orderPrice: 100 }],
  });
});

let orders = [];
app.post("/place-orders", (req, res) => {
  const { product_id, quantity } = req.body;

  if (!product_id || !quantity) {
    return res.status(400).json({ error: "Missing product_id or quantity" });
  }

  const order = {
    order_id: `ORD${orders.length + 1}`,
    product_id,
    quantity,
    status: "placed",
  };
  orders.push(order);
  res.json(order);
});

app.listen(port, () => {
  console.log(`Orders service running on http://localhost:${port}`);
});
