Rails.application.routes.draw do
  
  resources :messages
  # User
  #CREATE
  post '/signup', to: 'users#create'
  #READ
  get '/me', to: 'users#show'
  #READ
  #going to want to grab all users that aren't "me" and set them as connections
  get '/users', to: "users#index"
  #UPDATE
  #Allow user to update their info - update
  patch  '/users/:id', to: "users#update"
  #DESTROY
  #Allow user to delete account - destroy
  delete '/users/:id', to: "users#destroy"

  #Session
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"


  #Connections
  post '/connection', to: "connections#create"
  get '/connection', to: "connections#index"
  # get '/connection/:id', to: "connections#show"


  #Conversations
  #create conversations when two users like are each others connections - will need to run a check when the like button is hit
  get '/conversation', to: "conversations#index"
  get '/conversation/:email', to: "conversations#show"
  post '/conversation-main', to: "conversations#create"
  post '/conversation-secondary', to: "conversations#create_second"

  #Messages
  #Allow users to click on a conversation in the sidebar to show messages
  post '/message-main', to: "messages#create"
  post '/message-secondary', to: "messages#create_second"
  get '/message/:connection_id', to: "messages#show"

  #HTML
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
