import React from 'react'

import { useHistory } from 'react-router-dom'
import { ListGroupItem } from 'reactstrap'

type CharacterItemProps = {
  character: {
    speciesName?: string[]
    name: string
    films: string[]
    species: string[] | []
  }
}

const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
  const history = useHistory()

  return (
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
  )
}

export default CharacterItem
