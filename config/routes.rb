Rails.application.routes.draw do
  
  # User
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  #Session
  post '/login', to: "sessions#create"


  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
