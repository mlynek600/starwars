import React, { useEffect } from 'react'

import { times } from 'lodash'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import {
  Pagination as PaginationComponent,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'

import { GetStarwarsCharacters } from '../actions/starwarsActions'

type ParamTypes = {
  page?: string
  id?: string
}

type PaginationProps = {
  charactersCount?: number
}

const Pagination: React.FC<PaginationProps> = ({ charactersCount }) => {
  const dispatch = useDispatch()

  const { page = 1 } = useParams<ParamTypes>()

  const numberPage = Number(page)

  useEffect(() => {
    dispatch(GetStarwarsCharacters(numberPage))
  }, [page])

  const history = useHistory()

  const pagesCount = charactersCount && Math.ceil(charactersCount / 10)

  return (
    <PaginationComponent className="d-flex justify-content-center mt-3">
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
    </PaginationComponent>
  )
}

export default Pagination
