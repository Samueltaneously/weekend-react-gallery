import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryPieces, changeLikes}) {

  return (    
      <div className='galleryBody'>
            {galleryPieces.map((item) => (
              <GalleryItem
                key={item.id}
                item={item}
                changeLikes={changeLikes}
              />
            ))}
      </div>
    
  );
}

export default GalleryList;