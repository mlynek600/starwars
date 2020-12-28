import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  // Pagination,
  // PaginationItem,
  // PaginationLink,
} from 'reactstrap'

type CharactersType = {
  characters?: {
    name: string
    films: string[]
    species: string[] | []
  }[]
  species?: {
    name: string
    url: string
  }[]
}

const Characters: React.FC<CharactersType> = ({ characters, species }) => {
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
    <ListGroupItem key={character.name}>
      <h5>{character.name}</h5>

      <div className="text-secondary">
        {character.speciesName && character.speciesName}
      </div>
    </ListGroupItem>
  ))

  return (
    <Card>
      <CardHeader>STAR WARS VIEWER</CardHeader>
      <CardBody>
        <ListGroup>{characterItems}</ListGroup>
      </CardBody>
    </Card>
  )
}

export default Characters
