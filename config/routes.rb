Rails.application.routes.draw do
  
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :members, only: [:index, :show, :create]

  delete '/logout', to: "sessions#destroy"
  post "/login", to: "sessions#create"
  post "/signup", to: "members#create"
  post "/movies/:movie_id/reviews", to: "reviews#create"
  get '/me', to: "members#show"
  get '/movies', to: 'movies#index'
  get '/actors', to: "actors#index"
  get '/movies/:id', to: 'movies#show'
  get '/movieactors', to: "movieactors#index"
  post '/description', to: "movies#description"

  post '/wordcount/:comments', to: "reviews#wordcount"

end

















#   resources :movies , only: [:show] do
#   resources :reviews, only: [:show, :index]
# end 



# function handleSubmit(e) {
#   e.preventDefault();
#   fetch("/description", {
#     method: "POST",
#     headers: {
#       "Content-Type": "application/json",
#     },
#     body: JSON.stringify({
#       short_description: search,
#     }),
#   })
#     .then((response) => response.json())
#     .then((short_description) => {
#       console.log(short_description);
#     });
# }

# <form onSubmit={handleSubmit}>
#         Search description here:
#         <input
#           type="text"
#           value={search}
#           onChange={(e) => setSearch(e.target.value)}
#         />
#         <input type="submit" />
#       </form>



# def total_movies
#   "#{self.object.movies.count}"
# end


# def self.searchactor (letter)
#     Actor.all.select{|x|x.name.include?letter}
# end



# Write a custom class method that receives an argument of 
# one letter and looks at the names of the actors and returns 
# an array of all the actors that have that one letter in 
# their name.

# - Custom class method w/ 1 argument
# - Get all actors and iterate through them then look at their names
# - create new array with all the actors within requirement
