# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Guest login
User.create(username: 'guest', password: 'password')

# Routes
Route.create(title: 'Presidio/Crissy Field',
             waypoints: [
               { location: { lat: 37.803072, lng: -122.460548 } },
               { location: { lat: 37.803564, lng: -122.466921 } },
               { location: { lat: 37.807938, lng: -122.471127 } },
               { location: { lat: 37.804255, lng: -122.454149 } }
             ],
             user_id: 1)
