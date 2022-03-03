import { useRef, useState, useEffect } from 'react';
import { Input, Button, Paragraph } from './components/common'
import { TimerInterval } from './components/shared'
import { Counter } from './components/class'
import { PrivateRoute } from './components/containers'
import { Profile } from './components/pages'

function App() {

  const [state, setState] = useState<string>('')
  const customInputRef = useRef<HTMLInputElement>(null!) // dom ref
  const inputRef = useRef<HTMLInputElement>(null!) // dom ref

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
      <TimerInterval />
      <br />
      <br />
      <Counter message='Count:' />
      <br />
      <br />
      <PrivateRoute isAuth={false} component={Profile} />
    </div>
  );
}

export default App;
