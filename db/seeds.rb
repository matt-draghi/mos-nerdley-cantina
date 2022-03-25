user1 = User.create(
    first_name: "test",
    email: "test@test.com",
    password_digest: "$2a$12$I7l9nblJMT.VnDrf10URYONUAdiOcG3WImORWMFGymxeKpti4OqIu",
    location: "New York",
    age: 15,
    image: "https://picsum.photos/200/300",
    favorite_character: "test",
    description: "i am a test",
)

user2 = User.create(
    first_name: "Emily",
    email: "emily@test.com",
    password_digest: "$2a$12$KOlvZpWCx6GCcoHCbU21r.4dxOglfBvNRuoKu3oVQW4ctSDR04wxq",
    location: "Ohio",
    age: 23,
    image: "https://picsum.photos/200/300",
    favorite_character: "Obi Wan",
    description: "im emily",

)

# connection1 = Connection.create(
#     first_name: user2.first_name,
#     favorite_character: user2.favorite_character,
#     image: user2.image,
#     age: user2.age,
#     description: user2.description,

# )

# conversation1 = Conversation.create(
#     user_id: user1.id,
#     connection_id: connection1.id
# )


# message1 = TextMessage.create(
#     user_id: user1.id,
#     conversation_id: conversation1.id,
#     read_status: false,
#     text_message: "test message"
# )