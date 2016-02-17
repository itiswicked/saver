Rails.application.routes.draw do
  root 'homes#index'

  namespace :api do
    resources :places, only: [:index, :create, :update, :destroy]
  end
end
