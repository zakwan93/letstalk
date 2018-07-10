class CreateSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :skills do |t|

    	t.string :language
    	t.string :disc
    	t.integer :rating
      	t.timestamps
    end
  end
end
