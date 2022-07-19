import React from 'react'
import useGitHub from '../../hooks/github-hooks'
import * as S from './Styled'

const Profile = () => {
  const { githubState } = useGitHub()

  return (
    <S.Wrapper>
      <S.Image src={githubState.user.avatar} alt="Avatar of user" />
      <S.InfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.UserGeneric>
            <h3>username:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </S.UserGeneric>
          <S.UserGeneric>
            <h3>Company:</h3>
            <span>{githubState.user.company}</span>
          </S.UserGeneric>
          <S.UserGeneric>
            <h3>Location:</h3>
            <span>{githubState.user.location}</span>
          </S.UserGeneric>
          <S.UserGeneric>
            <h3>Blog:</h3>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog}
            </a>
          </S.UserGeneric>
        </div>
        <S.StatusCount>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
        </S.StatusCount>
      </S.InfoUser>
    </S.Wrapper>
  )
}

export default Profile
