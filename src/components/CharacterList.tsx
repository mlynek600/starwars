import React from 'react'

import { Card, CardBody, CardHeader, ListGroup } from 'reactstrap'

import { StarwarsCharacter, Species } from '../actions/starwarsActionTypes'

import CharacterItem from './CharacterItem'
import Pagination from './Pagination'

type CharacterListProps = {
  characters?: StarwarsCharacter[]
  charactersCount?: number
  species?: Species[]
}

const CharacterList: React.FC<CharacterListProps> = ({
  characters,
  charactersCount,
  species,
}) => {
  const addSpeciesName = (character: StarwarsCharacter) => {
    if (character.species.length === 0) {
      return { ...character, speciesName: undefined }
    }

    const characterSpeciesUrl = character.species[0]

    const speciesName = species
      ?.filter((species) => characterSpeciesUrl === species.url)
      .map((item) => item.name)

    return { ...character, speciesName: speciesName }
  }

  const charactersWithSpeciesNames = characters?.map(addSpeciesName)

  const characterItems = charactersWithSpeciesNames?.map((character) => (
    <CharacterItem character={character} />
  ))

  return (
    <Card className="mt-3 main-card">
      <CardHeader className="text-white bg-secondary">
        STAR WARS VIEWER
      </CardHeader>

      <CardBody className="pb-1">
        <ListGroup>{characterItems}</ListGroup>

        <Pagination charactersCount={charactersCount} />
      </CardBody>
    </Card>
  )
}

export default CharacterList
