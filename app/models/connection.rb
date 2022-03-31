class Connection < ApplicationRecord
    belongs_to :user
    has_one :conversation #, dependent: :destroy #will eventually add ability to remove user - then conversation also needs to be deleted
    has_many :messages, through: :conversation

end