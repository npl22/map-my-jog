class CreateRoutes < ActiveRecord::Migration[5.0]
  def change
    create_table :routes do |t|
      t.string :title, null: false
      t.string :waypoints, null: false
      t.integer :user_id, index: true, null: false
      t.timestamps
    end
  end
end
