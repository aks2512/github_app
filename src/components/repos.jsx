import PropTypes from "prop-types";

export const Repos = ({className, title, repos}) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index} ><a href={repo.html_url} target="_blank" >{repo.name}</a></li>
      ))}
    </ul>
  </div>
);

Repos.defaultProps = {
  className: '',
  repos: []
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}