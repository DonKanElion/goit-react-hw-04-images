import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchImages } from './services/imagesApi';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
// import ScrollUp from './components/ScrollUp';

// const STATUS = {
//   idle,
//   penting,
//   success, // resolve
//   regected, // error
// }

export const App = () => {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  // const [error, setError] = useState(null);
  const [total, setTotal] = useState(null);

  // state = {
  //   // status: [],
  //   page: 1,
  //   searchValue: '',
  //   images: [],
  //   isLoading: false,
  //   error: null,
  //   total: null,
  // };

  useEffect(() => {
    if (searchValue === '') {
      return;
    }

    setIsloading(true);

    try {
      const response = fetchImages(searchValue, page);

      if (response.total === 0) {
        notifyWarning(
          'Sorry, nothing was found for your request, try something else.'
        );
      }

      if (searchValue) {
        setImages([response.hits]);
        setTotal(response.total);
        return;
      }

      const newPage = response.hits;

      return setImages(prevState => [...prevState, ...newPage]);
    } catch (error) {
      // setError(error);
      notifyError(error);

      return console.log(error);
    } finally {
      setIsloading(false);
    }
  }, [searchValue, page]);

  // async componentDidUpdate(_, prevState) {

  //   if (prevState.searchValue !== searchValue || prevState.page !== page) {
  //     setIsloading(true);

  //     try {
  //       const response = await fetchImages(searchValue, page);

  //       if (response.total === 0) {
  //         notifyWarning(
  //           'Sorry, nothing was found for your request, try something else.'
  //         );
  //       }

  //       if (prevState.searchValue !== searchValue) {

  //         setImages([response.hits]);
  //         setTotal(response.total);
  //        return;
  //       }

  //       const newPage = response.hits;

  //       return setImages(prevState => ([...prevState, ...newPage]
  //       ));
  //     } catch (error) {
  //       notifyError();
  //       return console.log(error);
  //     } finally {
  //       setIsloading(false);
  //     }
  //   }
  // }

  const onSubmit = value => {
    if (value !== searchValue) {
      console.log('onSubmit')
      setSearchValue(value);
      setPage(1);
      console.log('onSubmit', value, page)
    }
  };

  const handleClick = () => {
    setPage(prevState => prevState + 1);
  };

  const notifyWarning = text => {
    Notify.warning(`${text}`);
  };

  const notifyError = () => {
    Notify.error('Oops, something went wrong, please try again.');
  };

  return (
    <div className="App">
      <Searchbar
        onSubmit={onSubmit}
        notifyWarning={notifyWarning}

        // isSubmitting={isLoading}
      ></Searchbar>

      {total > 0 && <ImageGallery images={images} />}

      {/* {isLoading && <Loader/>}

      {total / 12 > page &&
        <Button onClick={this.handleClick.bind(this)}/>
      } */}

      {isLoading ? (
        <Loader />
      ) : (
        total / 12 > page && <Button onClick={handleClick} />
      )}

      {/* <ScrollUp></ScrollUp> */}
    </div>
  );
};
