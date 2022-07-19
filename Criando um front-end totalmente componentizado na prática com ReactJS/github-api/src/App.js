import React from 'react'
import Layout from './components/Layout/Layout'
import NoSearch from './components/no-search/NoSearch'
import Profile from './components/Profile/Profile'
import Repositories from './components/repositories/Repositories'
import useGitHub from './hooks/github-hooks'

const App = () => {
  const { githubState } = useGitHub()

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  )
}

export default App
