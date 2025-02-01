local json = require("json")

function place_order(request)
  local product_id = request:query("product_id")
  local payload = {
    product_id = product_id,
    quantity = 1
  }

  request:body(json.encode(payload))
  return request
end
