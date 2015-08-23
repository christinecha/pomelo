class CreateQuotes < ActiveRecord::Migration
  def change
    create_table :quotes do |t|
      t.string :org_name
      t.string :contact_name
      t.string :contact_title
      t.integer :budget

      t.timestamps null: false
    end
  end
end
