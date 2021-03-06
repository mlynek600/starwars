import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { GetStarwarsSpecies } from './actions/starwarsActions'
import CharacterList from './components/Character/List'
import CharacterFilms from './components/Character/Films'
import routes from './constants/routes'
import { Store } from './Store'
import './styles/App.css'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    for (let i = 1; i < 5; i++) {
      dispatch(GetStarwarsSpecies(i))
    }
  }, [])

  const starwarsState = useSelector((state: Store) => state)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={routes.list.route}>
            <CharacterList
              characters={starwarsState.characters.characters?.results}
              charactersCount={starwarsState.characters.characters?.count}
              species={starwarsState.species.species?.results}
            />
          </Route>

          <Route exact path={routes.character.route}>
            <CharacterFilms />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App
