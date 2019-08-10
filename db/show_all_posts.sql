SELECT post.user_id, content, username, profile_image, post_image, title FROM post
JOIN users
ON post.user_id = users.user_id;
