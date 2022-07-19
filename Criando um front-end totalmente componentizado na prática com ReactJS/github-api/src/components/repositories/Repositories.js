import React, { useEffect, useState } from 'react'
import RepositoryItem from '../repository-item/RepositoryItem'
import useGitHub from '../../hooks/github-hooks'
import * as S from './RepositoriesStyled'

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGitHub()
  const [hasUserForSearchrepos, sethasUserForSearchrepos] = useState(false)

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login)
      getUserStarred(githubState.user.login)
    }
    sethasUserForSearchrepos(!!githubState.repositories)
  }, [githubState.user.login])

  return (
    <>
      {hasUserForSearchrepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTablist>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTablist>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.starred.map(item => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.repositories.map(item => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  )
}

export default Repositories
