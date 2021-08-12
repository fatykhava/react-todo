import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = (props) => {
  let [inputValue, setInputValue] = useState(props.inputValue);

  useEffect(() => {
    setInputValue(props.inputValue);
  }, [props.inputValue])

  const addItem = (e) => {
    if (e.key === 'Enter') {
      return props.addNewItem(e.target.value);
    }
  }

  console.log('local:' + inputValue);
  console.log(props.inputValue);

  return (
    <TextField id="standard-basic" label={props.labelName} fullWidth value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               onKeyPress={addItem} />
  );
}

export default TextInput;
