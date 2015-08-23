json.array!(@quotes) do |quote|
  json.extract! quote, :id, :org_name, :contact_name, :contact_title, :budget
  json.url quote_url(quote, format: :json)
end
