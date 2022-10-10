var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");

//var data = [
//    {
//        name: "Cloud's Rest",
//        image: "https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
//        description: "Clouds form very low here."
//    }
//]

//function seedDB(){
//    //Remove all campgrounds
//    Campground.remove({}, function(err){
//        if(err){
//            console.log(err);
//        }
//        console.log("removed campgrounds!");
//    });
//    //add a few campgrounds
//    data.forEach(function(seed){
//        Campground.create(seed, function(err, campground){
//            if(err){
//                console.log(err);
//            }else{
//                console.log("added a campground");
//                //create a comment
//                Comment.create(
//                    {
//                        text: "This place is great, but I wish there was internet",
//                        author: "Alexis Veyron"
//                }, function(err,comment){
//                    if(err){
//                        console.log(err);
//                    }else{
//                        campground.comments.push(comment);
//                        campground.save();
//                        console.log("Created new comment");
//                    }
//                });
//            }
//        });
//    });
//}

//module.exports=seedDB;