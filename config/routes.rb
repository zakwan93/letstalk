Rails.application.routes.draw do
	devise_for :users, controllers: {
	  registrations: 'users/registrations',
	  sessions: 'users/sessions'
	}
  	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  	
  	root to: "chat_rooms#index"

	resources :chat_rooms, only: [:new, :create, :show, :index]

	mount ActionCable.server => '/cable'

	get "dashboard", to: "profile#dashboard"

	resource :profile
	resources :skills

end