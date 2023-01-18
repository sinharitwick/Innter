const campgrounds = require('./models/campgrounds');

var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    flash           = require("connect-flash"),
    passport        = require('passport'),
    LocalStrategy   = require("passport-local"),
    Campground      = require('./models/campgrounds'),
    Comment         = require("./models/comment"),
    User            = require("./models/user"),
    methodOverride  = require("method-override");
//  seedDB          = require("./seeds");
    
//requiring routes
var commentRoutes   = require("./routes/comments"),
    campgroundRoutes= require("./routes/campgrounds"),
    indexRoutes     = require("./routes/index");

//(<--local-->)
// mongoose.connect("mongodb://localhost/yelp_camp");
// mongoose.connect("mongodb+srv://desinha:yummy@cluster0.h2bcr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
mongoose.connect("mongodb+srv://desinha:yummy@cluster0.a1qcb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
//(<--primary-->) mongoose.connect("mongodb+srv://desinha:milan@cluster0.a1qcb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); //writing __dirname is safer
app.use(methodOverride("_method"));
app.use(flash());
//seedDB(); //seed the database

//PASSPORT CONFIG
app.use(require("express-session")({
    secret: "YelpCamp is not authentic",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser=req.user;
    res.locals.error=req.flash("error");
    res.locals.success=req.flash("success");
    next();
});

app.use(indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes); //will take all campground routes from campgrounds.js and append it

app.listen(process.env.PORT || 3000, function(req, res){
    console.log("Innter is running...");
});

module.exports = app;