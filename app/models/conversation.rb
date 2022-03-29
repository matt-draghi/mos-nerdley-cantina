class Conversation < ApplicationRecord
    belongs_to :user
    belongs_to :connection
    # has_many :messages

end