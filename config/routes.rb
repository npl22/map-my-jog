Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :routes, only: [:index, :create, :show, :destroy]
  end

  root 'static_pages#root'
end
