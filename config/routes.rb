Rails.application.routes.draw do
  
  resources :reviews, only: [:index, :show, :update, :destroy]
  resources :movies
  resources :members
  delete '/logout', to: "sessions#destroy"
  post "/login", to: "sessions#create"
  post "/signup", to: "members#create"
  post "/movies/:movie_id/reviews", to: "reviews#create"
  get '/me', to: "members#show"
  get '/actors', to: "actors#index"
  get '/movieactors', to: "movieactors#index"
end
