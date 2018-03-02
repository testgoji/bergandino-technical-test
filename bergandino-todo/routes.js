var Todo = require('./app/models/todo');

function getTodos(res) {
    Todo.find(function (err, todos) {

        if (err) {
          res.send(err);
        }
        res.json(todos);
    });
};

module.exports = function (app) {
    // get all todos
    app.get('/test/api/todos', function (req, res) {
        getTodos(res);
    });

    // create todo and send back all todos after creation
    app.post('/test/api/todos', function (req, res) {

        // create a todo
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);
            getTodos(res);
        });

    });

    // delete a todo
    app.delete('/test/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);
            getTodos(res);
        });
    });

    app.get('/test', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
};
