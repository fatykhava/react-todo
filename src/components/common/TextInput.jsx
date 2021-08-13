import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = (props) => {
  let [inputValue, setInputValue] = useState('');

  const addItem = (e) => {
    if (e.key === 'Enter') {
      props.addNewItem(e.target.value);
      setInputValue('');
    }
  }

  return (
    <TextField id="standard-basic" label={props.labelName} fullWidth value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               onKeyPress={addItem} />
  );
}

export default TextInput;
