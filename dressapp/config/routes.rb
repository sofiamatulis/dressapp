Rails.application.routes.draw do

root 'wardrobes#index'


  resources :sessions, only: [:new, :create, :destroy]

  resources :users
  resources :wardrobes
  resources :items
  resources :suitcases






  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
