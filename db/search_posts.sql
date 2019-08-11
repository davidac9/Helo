SELECT post.user_id, content, username, profile_image, post_image, title, post_id, users.profile_image FROM post
JOIN users
ON post.user_id = users.user_id
WHERE title LIKE $1;
-- idk if this is gonna work