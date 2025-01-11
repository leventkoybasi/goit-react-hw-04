//CSS
import styles from "./App.module.css";
//Components
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import ImageGallery from "./components/ImageGallery";
import ImageModal from "./components/ImageModal";
// import ErrorMessage from "./components/ErrorMessage";
// import Loader from "./components/Loader";
function App() {
  return (
    <>
      <div className='bg-primary p-2 border-bottom border-dark border-4 shadow-lg d-flex flex-column flex-sm-row align-items-center justify-content-between'>
        <div className=''>
          <Title />
        </div>
        <div className='d-flex mt-3'>
          <SearchBar />
        </div>
        <div className={styles.spacer}></div>
      </div>

      <div>
        <ImageGallery />
      </div>
      <ImageModal />
    </>
  );
}

export default App;
