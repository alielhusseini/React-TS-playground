import React, { useRef, useState, useEffect } from 'react';
import { Input, Button, Paragraph } from './components/shared'

function App() {

  const [state, setState] = useState<string>('')
  const customInputRef = useRef<HTMLInputElement>(null!)
  const inputRef = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    customInputRef.current.focus()
    // inputRef.current.focus()
  }, [])

  return (
    <div>
      <Button title='Click Me' handleClick={(e) => console.log(state)} />
      <br />
      <br />
      <Input name='test' type='text' value={state} handleChange={(e) => setState(e.target.value)} ref={customInputRef} />
      <br />
      <br />
      <input type='text' ref={inputRef} />
      <br />
      <br />
      <Paragraph styles={{ color: '#999' }} />
      <br />
      <br />
    </div>
  );
}

export default App;
