- Created folder to hold project
- Create Server/Client
    - rails new rails-phase-4-project --skip-javascript
    - npx create-react-app client


Use a Rails API backend with a React frontend.
Have at least three models on the backend, that include the following:
At least two one-to-many relationships.
At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Note: in order to accomplish this, your project must include a joins table. This joins table must include a user submittable attribute.

---
## post

has_many :comments

has_many :users, through: :comments

:user_id

:content

:likes

:created_at

:updated_at

---
## comment

belongs_to :user

belongs_to :post

:user_id

:post_id

:content

:created_at

:updated_at

---
## user

has_many :posts

has_many :comments, through: :posts

:username

:first_name

:last_name

:email

:password

:date_of_birth

---



Full CRUD actions for at least one resource.
Minimum of create and read actions for EACH resource.

    - Create:
        - post
        - comment
    - Read: 
        - users
        - posts
        - comments
    - Update:
        - user info
        - post
        - comment
    - Delete: 
        - post
        - comment

Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.

    - User page
        - view user info
        - view self posts
        - view self comments
    - World page
        - create post
        - view all posts
        - comment on post
        - view all comments under post
    - Account page
        - view account info
        - view account posts

Implement authentication/authorization, including password protection. 
A user must be able to:
    - sign up with a new user account,
    - log in to the site with a secure password and stay logged in via user ID in the session hash
    - log out of the site.

