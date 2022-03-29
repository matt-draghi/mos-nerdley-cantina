class Connection < ApplicationRecord
    belongs_to :user
    has_one :conversation
    # has_many :messages, through: :conversation

end