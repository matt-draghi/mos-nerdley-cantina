class Connection < ApplicationController
    has_many :messages
    has_many :users, through: :messages

    
end