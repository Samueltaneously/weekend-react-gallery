import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';


function App() {

  let [galleryPieces, setGalleryPieces] = useState([]);


  useEffect(() => {
    getGallery();
  });

  const getGallery = () => {
    axios
      .get('/gallery')
      .then((response) => {
        setGalleryPieces(response.data);
      })
      .catch((error) => {
        alert(`Couldn't get gallery items.`);
        console.log('Error getting gallery', error);
      });
  };

  const changeLikes = (item, like) => {
    let thumbs;
    if (like === 'up') {
     thumbs = 1;
      // item.likes += 1;
      // item.dislikes -=1;
    } else if (like === 'down') {
      // item.likes -= 1;
     thumbs = -1;
      // item.dislikes += 1;
    // } else {
    //   console.log('Need to pass in direction of up or down');
    }

    axios
      .put(`/gallery/like/${item.id}`, { thumbs: thumbs })
      .then((response) => {
        getGallery();
      })
      .catch((error) => {
        alert(`Couldn't update like count.`);
        console.log('Error updating likes.', error);
      });
  };


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of the Best Things</h1>
        </header>

        <p>My Gallery</p>

        <GalleryList
          galleryPieces={galleryPieces}
          changeLikes={changeLikes}
        />

      </div>
    );
}

export default App;
