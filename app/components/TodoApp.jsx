var React=require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp=React.createClass({
    getInitialState:function(){
        return{
            todos:[
                {
                    id:1,
                    text:'walk the dog'
                },
                {
                    id:2,
                    text:'clean the yard'
                },
                {
                    id:3,
                    text:'make a program'
                },
                {
                    id:4,
                    text:'play basketball'
                }
            ]
        }
    },
    handleAddTodo:function(text){ 
        alert('new todo '+text);        
    },
    render: function(){        
       var {todos}=this.state;
        return(
            <div>
                <TodoList todos={todos}/>
                <AddTodo handleAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});
module.exports=TodoApp;