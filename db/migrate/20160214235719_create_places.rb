class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :name, null: false
      t.string :description
      t.string :neighborhood, null: false
      t.belongs_to :category, null: false

      t.timestamps null: false
    end
  end
end
