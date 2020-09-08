import React from 'react';
import 'simple-error-component';

function App() {
  return (
    <div className="App">
      <error-component>Esto en un mensaje</error-component>
      <error-component kind="warning">Esto en un mensaje</error-component>
      <error-component kind="error">Esto en un mensaje</error-component>
    </div>
  );
}

export default App;
