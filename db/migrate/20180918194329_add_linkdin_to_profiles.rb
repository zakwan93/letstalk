class AddLinkdinToProfiles < ActiveRecord::Migration[5.2]
  def change
    add_column :profiles, :linkdin, :string
  end
end
