SELECT post.user_id, content, username, profile_image, post_image, title FROM post
JOIN users
ON post.user_id = users.user_id
WHERE title LIKE $1;
-- idk if this is gonna work