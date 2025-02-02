const express = require("express");
const app = express();
const port = 3008;

const destinationData = [
  {
    id: 1,
    name: "Destination 1",
    description: "This is the first destination",
  },
  {
    id: 2,
    name: "Destination 2",
    description: "This is the second destination",
  },
];
app.get("/destinations/:id", (req, res) => {
  const destinationId = req.params.id;
  console.log("des", destinationId);

  const destination = destinationData.find(
    (_item) => destinationId == _item.id
  );
  res.json(
    destination ?? {
      error: "Destination not found",
    }
  );
});

app.get("/destinations", (req, res) => {
  const destinationId = req.body?.id;
  console.log("des", req.body);

  const destination = destinationData.find(
    (_item) => destinationId == _item.id
  );
  res.json(
    destination ?? {
      error: "Destination not found",
    }
  );
});

app.listen(port, () => {
  console.log(`Destinations service running on http://localhost:${port}`);
});
