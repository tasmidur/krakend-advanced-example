local json = require("json")

function check_availability(request)
  local response = request:perform()
  local body = json.decode(response:body())

  if not body.available then
    return {
      status_code = 400,
      body = json.encode({ error = "Product not available" })
    }
  end

  return request
end
