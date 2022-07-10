import PropTypes from 'prop-types';
import { Actions } from './actions';
import { Repos } from './repos';
import { Search } from './search';
import { UserInfo } from './user-info';

export const AppContent = ({ userinfo, repos, starred, handleSearch, handleRepos, handleStarred }) => (
  <div className="app">
    <Search handleSearch={handleSearch} />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions 
      handleRepos={handleRepos} 
      handleStarred={handleStarred} 
    />}
    {!!repos.length && <Repos
      className="repos"
      title="Repositórios:"
      repos={repos}
    />}
    { !!starred.length && <Repos
      className="starred"
      title="Favoritos:"
      repos={starred}
    />}
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

