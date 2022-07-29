import { ImgGallery } from './ImgGallery.styles';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
//-----------------------------------------------------------//

export const ImageGallery = ({ imageList, handlerOpenModal }) => {
  return (
    <ImgGallery>
      {imageList.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            smallImg={webformatURL}
            largeImg={largeImageURL}
            handlerOpenModal={handlerOpenModal}
          />
        );
      })}
    </ImgGallery>
  );
};