import styles from "../App.module.css";

function SearchBar() {
  return (
    <>
      <form className='input-group mb-3'>
        <input
          type='text'
          name='search'
          className={`form-control ${styles.input}`}
          placeholder='Search'
          aria-label='search'
          aria-describedby='button-addon2'
        />
        <button className='btn btn-white' type='button' id='button-addon2'>
          <i className='bi bi-search'></i>
        </button>
      </form>
    </>
  );
}

export default SearchBar;
