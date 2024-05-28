var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var session = require("express-session")
var passport = require("passport")
var methodOverride = require("method-override")

require("dotenv").config()
require("./config/database")
require("./config/passport")

var indexRouter = require("./routes/index")
// var usersRouter = require('./routes/users')
var adminsRouter = require("./routes/admins")
var listsRouter = require("./routes/lists")
var booksRouter = require("./routes/books")

var reviewsRouter = require("./routes/reviews")

var app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use(methodOverride("_method"))

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.use(function (req, res, next) {
  console.log(JSON.stringify(req.user, null, 2))
  res.locals.user = req.user
  next()
})

app.use("/", indexRouter)
// app.use('/users', usersRouter)
app.use("/admins", adminsRouter)
app.use("/lists", listsRouter)
app.use("/books", booksRouter)
app.use("/", reviewsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (e, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = e.message
  res.locals.error = req.app.get("env") === "development" ? e : {}

  // render the error page
  res.status(e.status || 500)
  res.render("error")
})

module.exports = app
