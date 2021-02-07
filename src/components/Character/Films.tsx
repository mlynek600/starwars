import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'

import { GetStarwarsFilm } from '../../actions/starwarsActions'
import { Store } from '../../Store'

import Layout from '../Layout'

type LocationType = {
  name: string
  films: string[]
}

const CharacterFilms: React.FC = () => {
  const dispatch = useDispatch()

  const location = useLocation<LocationType>()

  const { name, films } = location.state

  const fetchAllFilms = () => {
    films.forEach((film) => dispatch(GetStarwarsFilm(film)))
  }

  useEffect(() => {
    fetchAllFilms()
  }, [])

  const stateFilms = useSelector((state: Store) => state.films.films)

  const characterFilms = stateFilms?.filter((film) =>
    films.includes(film.url)
  )

  const movies = characterFilms?.map((film) => (
    <ListGroupItem key={film.title} className="pb-0">
      <p>
        {film.title} [{film.release_date}]
      </p>
      <p className="small text-muted">Director: {film.director}</p>
    </ListGroupItem>
  ))

  return (
    <Layout>
      <ListGroup>
        <ListGroupItem className="d-flex align-items-center">
          <div>
            <button
              onClick={() => history.back()}
              className="btn btn-light rounded-pill mr-3"
            >
              <span className="arrow left"></span>
            </button>
          </div>

          <h4 className="font-weight-bold mt-1">{`${name} movies`}</h4>
        </ListGroupItem>

        {movies}
      </ListGroup>
    </Layout>
  )
}

export default CharacterFilms
