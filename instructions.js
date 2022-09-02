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
// - ['POST'] /auth/users
// - ['GET'] /auth/me *Token Auth Required
// - ['PUT'] /auth/users/<user_id> *Token Auth Required
// - ['DELETE'] /auth/users/<user_id> *Token Auth Required
// - ['POST'] /auth/token  *Basic Auth Required

// - ['POST'] /blog/posts
// - ['GET'] /blog/posts
// - ['GET'] /blog/posts/<post_id>
// - ['PUT'] /blog/posts/<post_id> *Token Auth Required
// - ['DELETE'] /blog/posts/<post_id> *Token Auth Required
//////////////////////////////////////////////////////////////

// STEPS:

    // create links within navbar to different sections 
    //     - sign up [POST]
    //     - log in [GET]
    //     - log out 
    //     - view all posts (click on desired existing post on this page, edit/delete that post on post clicked) [GET] for getting one post [POST] for editing [GET] for deleting
    //     - create blog post 

    // create routes for the App.js