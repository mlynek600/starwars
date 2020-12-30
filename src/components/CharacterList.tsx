import React, { useEffect } from 'react'

import { times } from 'lodash'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import {
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'

import { GetStarwarsCharacters } from '../actions/starwarsActions'

type CharacterListProps = {
  characters?: {
    name: string
    films: string[]
    species: string[] | []
  }[]
  charactersCount?: number
  species?: {
    name: string
    url: string
  }[]
}

type ParamTypes = {
  page?: string
  id?: string
}

const CharacterList: React.FC<CharacterListProps> = ({
  characters,
  charactersCount,
  species,
}) => {
  const dispatch = useDispatch()

  const { page = 1 } = useParams<ParamTypes>()

  const numberPage = Number(page)

  useEffect(() => {
    dispatch(GetStarwarsCharacters(numberPage))
  }, [page])

  const history = useHistory()

  const charactersWithSpeciesNames = characters?.map((character) => {
    if (character.species.length === 0) {
      return { ...character, speciesName: null }
    } else {
      const characterSpeciesUrl = character.species[0]
      const speciesName = species
        ?.filter((species) => characterSpeciesUrl === species.url)
        .map((item) => item.name)
      return { ...character, speciesName: speciesName }
    }
  })

  const characterItems = charactersWithSpeciesNames?.map((character) => (
    <ListGroupItem
      key={character.name}
      className="p-2 d-flex justify-content-between align-items-center"
    >
      <div>
        <h6 className="mb-0">{character.name}</h6>

        <small className="text-secondary text-small">
          {character.speciesName && character.speciesName}
        </small>
      </div>

      <div>
        <button
          onClick={() =>
            history.push(`/character/${character.name.replace(' ', '')}`, {
              name: character.name,
              films: character.films,
            })
          }
          className="btn btn-light rounded-pill"
        >
          <span className="arrow right"></span>
        </button>
      </div>
    </ListGroupItem>
  ))

  const pagesCount = charactersCount && Math.ceil(charactersCount / 10)

  const pagination = (
    <Pagination className="d-flex justify-content-center mt-3">
      {pagesCount &&
        times(pagesCount, (i) => (
          <PaginationItem key={i} active={numberPage === i + 1}>
            <PaginationLink
              style={{
                boxShadow: 'none',
                color: 'black',
              }}
              onClick={() => {
                history.push(`${i + 1}`)
              }}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
    </Pagination>
  )

  return (
    <Card className="mt-3 main-card">
      <CardHeader className="text-white bg-secondary">
        STAR WARS VIEWER
      </CardHeader>

      <CardBody className="pb-1">
        <ListGroup>{characterItems}</ListGroup>

        {pagination}
      </CardBody>
    </Card>
  )
}

export default CharacterList
