Rails.application.routes.draw do

root 'users#home'


  resources :sessions, only: [:new, :create, :destroy]
  resources :items_suitcases, only: [:create]
  post 'items_suitcases/create_multi' => 'items_suitcases#create_multi', as: 'multi'

  resources :users
  resources :wardrobes
  resources :items
  resources :suitcases



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end