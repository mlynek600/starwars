import React, { useState, useEffect } from 'react'
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

type Data =
  | {
      count: number
      next: string
      previous: null
      results: { name: string; species: string[] | [] }[]
    }
  | undefined

const Characters: React.FC = () => {
  const [charactersData, setCharactersData] = useState<Data>()
  const [species, setSpecies] = useState()

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((data) => setCharactersData(data))
    fetch('https://swapi.dev/api/species/')
      .then((response) => response.json())
      .then((data) => setSpecies(data))
  }, [])
  console.log(species)

  const characterItems = charactersData?.results.map((character) => (
    <ListGroupItem key={character.name}>
      {character.name}
      {/* {species.results} */}
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
