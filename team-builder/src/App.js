import React, { useState } from "react";
import './App.css';
import Form from "./Form";

const intialForm = {
  name:'',
  email:'',
  role:''
}

function App() {
  const [team, setTeam ] = useState([])
  const [ form, setForm ] = useState(intialForm)

  const update = (name, value ) => {
    setForm({...form, [name]: value})
  }

  const submit = () => {
    setTeam([...team, form])
    setForm(intialForm)
  }
  return (
    <div className="App">
      <h1>Team Form</h1>
      <Form form={form} update={update} submit={submit}/>
    </div>
  );
}

export default App;
