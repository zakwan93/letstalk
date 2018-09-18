class AddGithubToProfiles < ActiveRecord::Migration[5.2]
  def change
    add_column :profiles, :github, :string
  end
end
