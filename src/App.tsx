import { useState } from 'react';
import { Input, Button } from './components/shared'

function App() {

  const [state, setState] = useState<string>('')

  return (
    <div>
      <Button title='Click Me' handleClick={(e) => console.log(state)} />
      <Input name='test' type='text' value={state} handleChange={(e) => setState(e.target.value)} />
    </div>
  );
}

export default App;
