import React, { useState, useEffect } from 'react';
import './App.css';
import {Button } from '@material-ui/core';
import {FormControl,Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './Firebase';
import firebase from 'firebase';
function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads we need to listen to 
  //database and fetch new todos as they get added or removed

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapShot => {
      //console.log(snapShot.docs.map(doc => doc.data().todo));
      setTodos(snapShot.docs.map(doc =>({id: doc.id,todo: doc.data().todo}) ))
    })


  },[])

  const addTodo = (e) => {
    e.preventDefault();
    //console.log(input);
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

   // setTodos([...todos, input]);
    setInput('');

  }

  return (
    <div className="App">
     
        <h1>Bharath TODO</h1>

        <FormControl >
        <InputLabel >Enter : </InputLabel>
        <Input value={input} onChange={(e) => setInput(e.target.value)}  />
        <Button disabled={!input} type='submit'onClick={addTodo}
          variant="contained" color="primary">
            ADD TODO
          </Button>
      </FormControl>
        
        
        <ul>
          {
          todos.map(todo => <Todo todo={todo} /> )
          }
        </ul>
    </div>
  );
}

export default App;
