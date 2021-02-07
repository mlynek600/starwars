import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ListGroup } from 'reactstrap'

import { GetStarwarsCharacters } from '../../actions/starwarsActions'
import {
  StarwarsCharacter,
  Species,
} from '../../actions/starwarsActionTypes'

import Layout from '../Layout'
import Pagination from '../Pagination'

import CharacterItem from './Item'

type ParamTypes = {
  page?: string
  id?: string
}

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
  const dispatch = useDispatch()

  const { page = 1 } = useParams<ParamTypes>()

  const numberPage = Number(page)

  useEffect(() => {
    dispatch(GetStarwarsCharacters(numberPage))
  }, [page])

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
    <CharacterItem key={character.name} character={character} />
  ))

  return (
    <Layout>
      <ListGroup>{characterItems}</ListGroup>

      <Pagination charactersCount={charactersCount} page={numberPage} />
    </Layout>
  )
}

export default CharacterList
