var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo", { useMongoClient: true })

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

User.findOne({name: "Hewie Madrigal"}, function(err, user){
    if(err) {
        // console.log(err);
    } else {
        user.posts.push({
            title: "Why mama is the best",
            content: "She gives me cuddles, cheese and walks"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        })
    }
});

// var newUser = new User({
//     email: "hubert@cheese.edu",
//     name: "Hewie Madrigal"
// });

// newUser.posts.push({
//     title: "5 top cheeses",
//     content: "Kraft, kraft, kraft, kraft, kraft!"
// })

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious!"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });