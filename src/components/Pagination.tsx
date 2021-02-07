import React from 'react'

import { times } from 'lodash'

import { useHistory } from 'react-router-dom'
import {
  Pagination as PaginationComponent,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'

type PaginationProps = {
  charactersCount?: number
  page: number
}

const Pagination: React.FC<PaginationProps> = ({
  charactersCount,
  page,
}) => {
  const history = useHistory()

  const pagesCount = charactersCount && Math.ceil(charactersCount / 10)

  return (
    <PaginationComponent className="d-flex justify-content-center mt-3">
      {pagesCount &&
        times(pagesCount, (i) => (
          <PaginationItem key={i} active={page === i + 1}>
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
    </PaginationComponent>
  )
}

export default Pagination
