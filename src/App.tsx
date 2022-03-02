import { useState } from 'react';
import { Input, Button, Paragraph } from './components/shared'

function App() {

  const [state, setState] = useState<string>('')

  return (
    <div>
      <Button title='Click Me' handleClick={(e) => console.log(state)} />
      <Input name='test' type='text' value={state} handleChange={(e) => setState(e.target.value)} />
      <Paragraph styles={{ color: '#999' }} />
    </div>
  );
}

export default App;
