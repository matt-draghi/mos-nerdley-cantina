Rails.application.routes.draw do
  
  # User
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  #going to want to grab all users that aren't "me" and set them as connections
  get '/users', to: "users#index"

  #Session
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"


  #Connections
  post '/connection', to: "connections#create"
  get '/connection', to: "connections#index"

  #Messages

  #HTML
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
