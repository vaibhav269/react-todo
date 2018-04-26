var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var AddTodo = require('AddTodo');

describe('AddTodo',()=>{
    it('should exist',()=>{       
        expect(AddTodo).toExist();
    });
    it('should call handleAddTodo if valid todo is entered',()=>{
        var todoText="Go for a walk";
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        
        addTodo.refs.todoText.value=todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(todoText);
    });
    it('should not call handleAddTodo if invalid todo is entered',()=>{
        var todoText="";
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        
        addTodo.refs.todoText.value=todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});