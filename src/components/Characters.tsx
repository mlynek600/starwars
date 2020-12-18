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
}

const Characters: React.FC<CharactersType> = ({ characters }) => {
  const characterItems = characters?.map((character) => (
    <ListGroupItem key={character.name}>{character.name}</ListGroupItem>
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
