INSERT INTO users(username, password, profile_image)
VALUES (${username}, ${password}, ${profile_image})
RETURNING *;