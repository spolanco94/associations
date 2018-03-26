var mongoose = require("mongoose");

mongoose.Promise = global.Promise; 
mongoose.connect("mongodb://localhost/blog_demo_2", { useMongoClient: true })

var Post = require("./models/post");
var User = require("./models/users");

// Post.create({
//     title: "Okay",
//     content: "I punished him. He's uh grounded. Not ground meat. I don't make human burgers."
// }, function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//             if(err){
//                 console.log(err);
//             } else {
//                 foundUser.posts.push(post);
//                 foundUser.save(function(err, data){
//                     if(err){
//                         console.log(err);
//                     } else {
//                         console.log(data);
//                     }
//                 });
//             }
//         });
//     }
// });

// Find User
// Find all posts by said user
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
    if(err) {
        console.log(err);
    } else {
        console.log(user);
    }
});

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });