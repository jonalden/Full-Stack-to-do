var db = require("../models");
console.log("routes loaded")
module.exports = function (app) {

    // GET route for getting all of the tasks, completed or not
    app.get("/", function (req, res) {
        db.Todo.findAll({}).then(function (dbTodos) {
            console.log(dbTodos);
            res.render("index", {
                todo: dbTodos
            })
            
        })
    });

    // POST route for saving a new todo
    app.post("/api/todo", function (req, res) {
        console.log("POST ROUTE", req.body.task)
        db.Todo.create({
            task: req.body.task
        }).then(function (dbTodo) {
            res.json(dbTodo)
        })
    });

    app.put("/api/todo:id", function(req, res) {
        db.Todo.update({
            completed: req.params.completed
        }).then(function(dbTodo) {
            res.json(dbTodo);
        })
    })

    app.delete("/api/todo/:id", function(req, res) {
        db.Todo.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbTodo) {
            res.json(dbTodo)
        })
    })


    // app.put  based on an id is going o turn completed to true
}