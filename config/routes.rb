Rails.application.routes.draw do
  
  # User
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  #going to want to grab all users that aren't "me" and set them as connections

  #Session
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"


  #Connections
  get '/connections', to: "connections#index"

  #HTML
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
