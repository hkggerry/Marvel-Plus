Rails.application.routes.draw do
  
  resources :movies
  resources :members
  delete '/logout', to: "sessions#destroy"
  post "/login", to: "sessions#create"
  post "/signup", to: "members#create"
  get '/me', to: "members#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
