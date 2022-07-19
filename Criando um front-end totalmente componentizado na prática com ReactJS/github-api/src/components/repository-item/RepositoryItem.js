import React from 'react'
import * as S from './RepositoryItemStyled'

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>
        <h2>{name}</h2>
      </S.WrapperTitle>
      <S.WrapperFullName>
        <h4>full name:</h4>
      </S.WrapperFullName>
      <S.WrapperLink>
        <a href={linkToRepo} target="_blank" rel="noreferrer">
          {fullName}
        </a>
      </S.WrapperLink>
    </S.Wrapper>
  )
}

export default RepositoryItem
