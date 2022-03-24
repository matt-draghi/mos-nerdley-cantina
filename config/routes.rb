Rails.application.routes.draw do
  
  # User account creation
  post '/signup', to: 'users#create'
  # get '/me', to: 'users#show'


  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
