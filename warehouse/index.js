const express = require("express");
const app = express();
const port = 3006;

// Mock product availability data
const products = {
  123: { available: true, stock: 10 },
  456: { available: false, stock: 0 },
};

app.get("/warehouse/check-availability", (req, res) => {
  const productId = req.query.product_id;
  const product = products[productId];

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json({
    product_id: productId,
    available: product.available,
    stock: product.stock,
  });
});

app.listen(port, () => {
  console.log(`Warehouse Service running on http://localhost:${port}`);
});
