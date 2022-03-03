import { useRef, useState, useEffect } from 'react';
import { Input, Button, Paragraph } from './components/elements'
import { TimerInterval, ListGeneric, RandomNumber, ToastNotification } from './components/shared'
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
      <Paragraph text='TEXT' styles={{ color: '#999' }} />
      <br />
      <br />
      <TimerInterval />
      <br />
      <br />
      <Counter message='Count:' />
      <br />
      <br />
      <PrivateRoute isAuth={false} component={Profile} />
      <br />
      <br />
      <ListGeneric
        items={[{ id: 1, name: 'Ali', color: 'blue' }, { id: 2, name: 'El', color: 'grey' }, { id: 2, name: 'Husseini', color: 'black' }]}
        handleClick={(item) => console.log({ item })}
      />
      <br />
      <br />
      <RandomNumber value={10} isPositive />
      <br />
      <br />
      <ToastNotification position='center' />
    </div>
  );
}

export default App;
