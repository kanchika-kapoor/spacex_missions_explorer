import React, {useState, useCallback} from 'react';
import LaunchList from './components/LaunchList';
import LaunchProfile from './components/LaunchProfile';
import './App.css'

const default_id:string = '5f8399fb818d8b59f5740d43'

const App = ()=>{
  const [id, setId] = useState(default_id)
  const handleIdChange = useCallback((newId:string) => {
    setId(newId)
  }, [])

  return (
    <div className='App'>
      <LaunchList handleIdChange={handleIdChange}/>
      <LaunchProfile id={id}/>
    </div>
  )
}

export default App;
