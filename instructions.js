// A user should be able to 
//     sign up, 
//     log in and 
//     log out. 

// All users should be able to 
//     see all of the blog posts and 
//     get a single blog post.

// A logged in user should be able to 
//     create, 
//     update, and 
//     delete blog posts. (if i have the time, add delete only that user's blog posts)

// Here are the endpoints:
// - create user: ['POST'] /auth/users
// - get user token: ['GET'] /auth/me *Token Auth Required
// - edit user id???: ['PUT'] /auth/users/<user_id> *Token Auth Required
// - delete a user: ['DELETE'] /auth/users/<user_id> *Token Auth Required
// - ['POST'] /auth/token  *Basic Auth Required

// - create post: ['POST'] /blog/posts
// - get all posts: ['GET'] /blog/posts
// - get one post: ['GET'] /blog/posts/<post_id>
// - edit post: ['PUT'] /blog/posts/<post_id> *Token Auth Required
// - delete post: ['DELETE'] /blog/posts/<post_id> *Token Auth Required
//////////////////////////////////////////////////////////////

// STEPS:

// create links within navbar to different sections 
//     - sign up [POST]
//     - log in [GET]
//     - log out 
//     - view all posts (click on desired existing post on this page, edit/delete that post on post clicked) [GET] for getting one post [POST] for editing [GET] for deleting
//     - create blog post 

// create routes for the App.js

// create view blog page

// fetch data for all posts from api
// view card elements for each blog, include title , body , user 

    // create create post page

        // fetch user from db and post new post 
        // show form w title, body, submit 

    // create login page

        // fetch user email/username pswd from db 
        // show for w username/email , pswd , submit btn 

    // create signup page

        // fetch users and add a new user 
        // show form w email , username , pswd , conf pswd, submit btn 

    // create view/edit post page

        // fetch data for a specific post 
        // show form w post title, body, edit, delete btns