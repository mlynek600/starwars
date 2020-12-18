import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Characters from './components/Characters'
import { Store } from './Store'
import { GetStarwarsCharacters } from './actions/starwarsActions'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetStarwarsCharacters(1))
  }, [])

  const starwarsState = useSelector((state: Store) => state.starwars)

  return (
    <div className="App">
      <Characters characters={starwarsState.characters?.results} />
    </div>
  )
}
export default App
