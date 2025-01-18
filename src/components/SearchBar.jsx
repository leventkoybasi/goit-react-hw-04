import styles from '../App.module.css';

function SearchBar({ search, setSearch, fetchData, setPicture, setLoaders }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoaders(true);
    const images = await fetchData(search);
    setPicture(images);
    setLoaders(false);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form className='input-group mb-3' onSubmit={handleSubmit}>
      <input
        type='text'
        name='search'
        className={`form-control ${styles.input}`}
        placeholder='Search'
        aria-label='search'
        value={search}
        onChange={handleSearchChange}
      />
      <button className='btn btn-white' type='submit' id='button-addon2'>
        <i className='bi bi-search'></i>
      </button>
    </form>
  );
}

export default SearchBar;
