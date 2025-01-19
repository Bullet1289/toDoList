import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/todo-item"



export const ToDoList = (props: {todos: ToDo[]}) => {
    

    const ceckedList = () => {
        return  props.todos
        .filter((item) => !item.isDone)
        .map((item, idx) => {
            return (
                <ToDoListItem toDoItem={item} key={idx} />
            )
        })
    }

    const unceckedList = () => {
        return  props.todos
        .filter((item) => item.isDone)
        .map((item, idx) => {
            return (
                <ToDoListItem toDoItem={item} key={idx} />
            )
        })
    }

    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {ceckedList()}
            </ul>
            <ul className="todo-list completed">
                {unceckedList()}
            </ul>
        </div>
    )
}