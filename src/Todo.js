import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core';
import './Todo.css';
import db from './Firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
    return (
       <List className="todo__list">
           <ListItem >
                <ListItemText primary={props.todo.todo}  />
           </ListItem>
           <DeleteForeverIcon onClick={e => db.collection('todos').doc(props.todo.id).delete() } ></DeleteForeverIcon>
       </List>
    )
}

export default Todo
