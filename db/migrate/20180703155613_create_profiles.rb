class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :fname
      t.string :lname
      t.string :nycdastudent
      t.string :location
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
