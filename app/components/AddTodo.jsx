var React = require('react');

var AddTodo = React.createClass({
    handleSubmit:function(e){
        e.preventDefault();
        var {handleAddTodo} = this.props;
        var todoText=this.refs.todoText.value;      
        if(todoText.length>0) {
            handleAddTodo(todoText);
            this.refs.todoText.value="";
        }else{
            this.refs.todoText.focus();
        }
    },
    render:function(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"></input>
                    <button type="submit" className="button expanded">Check</button>
                </form>
            </div>
        )
    }
});
module.exports=AddTodo;