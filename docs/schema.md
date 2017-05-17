# Schema Information

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Routes
column name | data type             | details
------------|-----------------------|-----------------------
id          | integer               | not null, primary key
title       | string                | not null
path        | line_string (PostGIS) | not null, geometric
distance    | float                 | not null
elevation   | float                 | not null
user_id     | integer               | not null, foreign key (references users), indexed

## Comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed
route_id    | integer   | not null, foreign key (references routes), indexed

## Follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followee_id | integer   | not null, foreign key (references users), indexed
