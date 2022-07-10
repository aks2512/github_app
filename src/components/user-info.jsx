import PropTypes from 'prop-types';

export const UserInfo = ({userinfo}) => (
  <div className="user-info">
    <img src={userinfo.photo} alt="" />

    <div className="main-info">
      <h1 className="username"><a href={`https://github.com/${userinfo.login}`} >{userinfo.username}</a></h1>
      <ul className="repos-info">
        <li> Repositórios: {userinfo.username}</li>
        <li> Seguidores: {userinfo.followers}</li>
        <li> Seguindo: {userinfo.following}</li>
      </ul>
    </div>
  </div>
);

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}