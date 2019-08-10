DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR,
    profile_image text
);

CREATE TABLE post(
  post_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  content VARCHAR,
  post_image TEXT,
  title VARCHAR(50)
);