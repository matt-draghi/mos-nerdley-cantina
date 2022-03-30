ActiveRecord::Schema.define(version: 2022_03_30_142549) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "connections", force: :cascade do |t|
    t.string "first_name"
    t.string "location"
    t.integer "age"
    t.string "image"
    t.string "favorite_character"
    t.string "description"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "email"
    t.boolean "liked"
  end

  create_table "conversations", force: :cascade do |t|
    t.integer "user_id"
    t.integer "connection_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "messages", force: :cascade do |t|
    t.integer "conversation_id"
    t.boolean "read_status"
    t.string "message"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "email"
    t.string "password_digest"
    t.string "location"
    t.integer "age"
    t.string "image"
    t.string "favorite_character"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
