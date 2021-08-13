import React, {useEffect, useReducer} from 'react';
import todoReducer from './bll/reducer';
import './App.css';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TodoAPI from "./api/axiosAPI";
import TasksList from "./components/TasksList/TasksList";
import TextInput from "./components/common/TextInput";

const App = () => {
  let [state, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    TodoAPI.getItems().then(data => {
      dispatch({type: 'load', data})
    });
  }, []);

  const addNewItem = (itemName) => {
    const item = {
      id: (state[state.length-1].id + 1),
      name: itemName,
      date: new Date(),
      isCompleted: false
    }

    TodoAPI.addItem(item).then(() => {
        dispatch({type: 'add', item});
      }
    ).catch(e => console.log(e));
  }

  const toggleStatus = (itemId, itemStatus) => {
    TodoAPI.updateItemStatus(itemId, itemStatus).then(() => {
        dispatch({type: 'toggle-status', itemId})
      }
    ).catch(e => console.log(e));
  }

  const deleteItem = (itemId) => {
    TodoAPI.deleteItem(itemId).then(() => {
        dispatch({type: 'delete', itemId})
      }
    ).catch(e => console.log(e));
  }

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Todo List
      </Typography>
      <TextInput labelName="Todo name" addNewItem={addNewItem}/>
      <TasksList tasks={state} onStatusChange={toggleStatus} onTrashClick={deleteItem}/>
    </Container>
  );
}

export default App;
