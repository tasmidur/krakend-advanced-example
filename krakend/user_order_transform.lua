-- transform.lua
local user = resp_user[1]  -- Response from /user
local orders = resp_orders[1]  -- Response from /orders

-- Build the nested response structure
local response = {
  user = {
    data = {
      id = user.id,
      name = user.name,
      orders = {
        data = orders
      }
    }
  }
}

-- Return the transformed response
return response