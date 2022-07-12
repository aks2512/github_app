import PropTypes from 'prop-types';

export const Search = ({ handleSearch, isDisabled }) => (
    <div className="search">
      <input 
        type="search" 
        placeholder="Digite o nome do usuário no GitHub" 
        disabled={isDisabled}
        onKeyUp={handleSearch}
      />
    </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}