import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetStarwarsFilm } from '../actions/starwarsActions'
import { Store } from '../Store'

import {
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from 'reactstrap'

type LocationType = {
  name: string
  films: string[]
}

const CharacterFilms: React.FC = () => {
  const dispatch = useDispatch()

  const location = useLocation<LocationType>()

  const { name, films } = location.state

  useEffect(() => {
    films.forEach((film) => dispatch(GetStarwarsFilm(film)))
  }, [])

  const stateFilms = useSelector((state: Store) => state.films.films)

  const characterFilms = stateFilms?.filter((film) =>
    films.includes(film.url)
  )

  const movies = characterFilms?.map((film) => (
    <ListGroupItem key={film.title} className="pb-0">
      <p>
        {film.title} {`[${film.release_date}]`}
      </p>
      <p className="small text-muted">Director: {film.director}</p>
    </ListGroupItem>
  ))

  return (
    <Card className="mt-3 pb-3 main-card">
      <CardHeader className="text-white bg-secondary">
        STAR WARS VIEWER
      </CardHeader>

      <CardBody className="pb-1">
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
      </CardBody>
    </Card>
  )
}

export default CharacterFilms
