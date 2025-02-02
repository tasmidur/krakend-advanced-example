const express = require("express");
const app = express();
const port = 3007;
const hotelData = [
  {
    id: 1,
    name: "Grand Hotel",
    destination_id: 1,
  },
  {
    id: 2,
    name: "Hotel Royal",
    destination_id: 2,
  },
  {
    id: 3,
    name: "Hotel Lux",
    destination_id: 3,
  },
];
app.get("/hotels/:id", (req, res) => {
  console.log("call hotel");
  res.json(hotelData.find((_item) => _item.id == req.params.id));
});

app.listen(port, () => {
  console.log(`Hotels service running on http://localhost:${port}`);
});
