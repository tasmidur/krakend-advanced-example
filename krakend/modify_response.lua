local json = require("json")

-- Function to modify the response
function modify_response(response)
    -- Add a custom header
    response.headers["X-Custom-Header"] = "MyValue"

    -- Check if the response body is a string
    if response.body and type(response.body) == "string" then
        -- Transform the response body to uppercase
        response.body = string.upper(response.body)
    elseif response.body then
        -- If the body is not a string, handle it accordingly
        response.body = json.encode(response.body) -- Convert to JSON string if it's a table
    end
    print("Hellow lua")
    response.body['json'] = "json"
    return response
end

-- Register the modify_response function to be called on response
return {
    modify_response = modify_response
}
