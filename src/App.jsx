import { useState } from 'react';
//CSS
import styles from './App.module.css';
//Components
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import ImageGallery from './components/ImageGallery';
import ImageModal from './components/ImageModal';
import fetchData from './js/fetchData';
import LoadMoreButton from './components/LoadMoreButton';
import GoUpsideButton from './components/GoUpsideButton';
import Loader from './components/Loader';
// import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [picture, setPicture] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loaders, setLoaders] = useState(false);

  return (
    <>
      <div className='bg-primary p-2 border-bottom border-dark border-4 shadow-lg d-flex flex-column flex-sm-row align-items-center justify-content-between position-fixed top-0 w-100'>
        <div className=''>
          <Title />
        </div>
        <div className='d-flex mt-3'>
          <SearchBar
            search={search}
            setSearch={setSearch}
            fetchData={fetchData}
            setPicture={setPicture}
            setLoaders={setLoaders}
          />
        </div>
        <div className={styles.spacer}></div>
      </div>
      {loaders && <Loader />}
      <div style={{ marginTop: '120px' }}>
        <ImageGallery picture={picture} />
      </div>
      <LoadMoreButton page={page} setPage={setPage} search={search} setPicture={setPicture} />
      <GoUpsideButton />
      <ImageModal />
    </>
  );
}

export default App;
