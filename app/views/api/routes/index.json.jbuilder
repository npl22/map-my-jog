@routes.each do |route|
  json.set! route.id do
    json.extract! route, :id, :title, :waypoints, :distance, :user_id
  end
end
