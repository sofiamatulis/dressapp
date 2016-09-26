Rails.application.routes.draw do
  get 'sessions/new'

  get 'sessions/create'

  get 'sessions/destroy'

  get 'categories/index'

  get 'categories/show'

  get 'suitcases/index'

  get 'suitcases/show'

  get 'suitcases/edit'

  get 'suitcases/new'

  get 'suitcases/create'

  get 'suitcases/destroy'

  get 'items/index'

  get 'items/show'

  get 'items/new'

  get 'items/create'

  get 'items/destroy'

  get 'wardrobes/index'

  get 'wardrobes/show'

  get 'wardrobes/edit'

  get 'wardrobes/create'

  get 'wardrobes/new'

  get 'wardrobes/destroy'

  get 'users/show'

  get 'users/create'

  get 'users/new'

  get 'users/edit'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
