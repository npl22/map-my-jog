class CreateRoutes < ActiveRecord::Migration[5.0]
  def change
    create_table :routes do |t|
      t.string :title, null: false
      t.json :waypoints, array: true, null: false
      t.integer :user_id, index: true, null: false
      t.timestamps
    end
  end
end
