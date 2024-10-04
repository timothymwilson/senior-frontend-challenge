import React from 'react';
import './App.scss';
import Form from './ui/organisms/Form.organism';
import FormHeader from './ui/organisms/FormHeader.organism';

function App() {
  return (
    <div className="App">
      <FormHeader />
      <Form />
    </div>
  );
}

export default App;
