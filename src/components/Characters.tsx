import React from 'react'

import { times } from 'lodash'
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

type CharactersProps = {
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

  handlePageClick: (page: number) => void
}

const Characters: React.FC<CharactersProps> = ({
  characters,
  charactersCount,
  species,

  handlePageClick,
}) => {
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
    <ListGroupItem key={character.name} className="p-2">
      <h6 className="mb-0">{character.name}</h6>

      <small className="text-secondary text-small">
        {character.speciesName && character.speciesName}
      </small>
    </ListGroupItem>
  ))

  const pagesCount = charactersCount && Math.ceil(charactersCount / 10)

  const pagination = (
    <Pagination className="d-flex justify-content-center mt-2">
      {pagesCount &&
        times(pagesCount, (i) => (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageClick(i + 1)}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
    </Pagination>
  )

  return (
    <Card className="w-50 mt-3">
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

export default Characters
