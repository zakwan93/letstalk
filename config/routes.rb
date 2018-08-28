Rails.application.routes.draw do
	devise_for :users, controllers: {
	  registrations: 'users/registrations',
	  sessions: 'users/sessions'
	}
  	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  	
  	root to: "chat_rooms#index"

	resources :chat_rooms, only: [:new, :create, :show, :index, :destroy]

	mount ActionCable.server => '/cable'

	# get "dashboard", to: "skills#dashboard"
	get "dashboard", to: "skills#dashboard"

	resources :users, only: [] do
		resources :chat_rooms, only: [:new, :create, :destroy]
		resources :profile, only: [:index]
	end

	resource :profile do
		resources :skills, only: [:edit, :update, :destroy]
		# get "dashboard", to: "profile#dashboard"
	end
	resources :skills

end