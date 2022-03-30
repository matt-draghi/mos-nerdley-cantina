class User < ApplicationRecord
    has_secure_password
    validates :first_name, presence: true
    validates :favorite_character, presence: true
    validates :image, presence: true
    validate :real_email
    validates :email, uniqueness: true

    has_many :connections, dependent: :destroy
    has_many :conversations, dependent: :destroy    
    has_many :messages, through: :conversations

    private

    def real_email
        unless email.match?(/@gmail.com|@test.com|@yahoo.com|@hotmail.com|@icloud.com/)
            errors.add(:email, "Not a valid email domain")
        end
    end
        
end
