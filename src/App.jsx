import React, {useEffect, useReducer, useState} from 'react';
import todoReducer from './bll/reducer';
import './App.css';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TodoAPI from "./api/api";
import TasksList from "./components/TasksList/TasksList";
import TextInput from "./components/common/TextInput";

const App = () => {
  let [state, dispatch] = useReducer(todoReducer, []);
  let [newTaskValue, setNewTaskValue] = useState('test');

  useEffect(() => {
    TodoAPI.getItems().then(data => {
      dispatch({type: 'load', items: data.items})
    });
  }, []);

  const addNewItem = (value) => {
    dispatch({type: 'add', value})
    setNewTaskValue('');
    console.log(newTaskValue);
  }

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Todo List
      </Typography>
      <TextInput inputValue={newTaskValue} labelName="Todo name" addNewItem={addNewItem}/>
      <TasksList tasks={state}/>
    </Container>
  );
}

export default App;
