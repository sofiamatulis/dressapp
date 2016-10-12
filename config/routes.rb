Rails.application.routes.draw do

root 'users#home'


  resources :sessions, only: [:new, :create, :destroy]
  resources :items_suitcases, only: [:create, :destroy] do
    collection do
      delete 'destroy_multiple'
    end
  end
  post 'items_suitcases/create_multi' => 'items_suitcases#create_multi', as: 'multi'

  resources :users
  resources :wardrobes do
        get 'thumbnail', on: :member
    end

  resources :items
  resources :suitcases
  resources :categories, only: [:show]




  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
