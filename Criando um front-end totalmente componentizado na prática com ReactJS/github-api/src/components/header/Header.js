import React, { useState } from 'react'
import * as S from './HeaderStyled'
import useGitHub from '../../hooks/github-hooks'

const Header = () => {
  const { getUser } = useGitHub()
  const [usernameForSearch, setUsernameForSearch] = useState()
  const submitGetUser = () => {
    if (!usernameForSearch) return
    return getUser(usernameForSearch)
  }
  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o username que deseja buscar..."
          onChange={event => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  )
}

export default Header
