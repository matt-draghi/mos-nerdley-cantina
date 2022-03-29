Rails.application.routes.draw do
  
  # User
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  #going to want to grab all users that aren't "me" and set them as connections
  get '/users', to: "users#index"
  #Allow user to update their info - update
  patch  '/users/:id', to: "users#update"
  #Allow user to delete account - destroy
  delete '/users/:id', to: "users#destroy"
  #Session
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"


  #Connections
  post '/connection', to: "connections#create"
  get '/connection', to: "connections#index"


  #Conversations
  #create conversations when two users like are each others connections - will need to run a check when the like button is hit
  
  #Messages
  #Allow users to click on a conversation in the sidebar to show messages

  #HTML
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
