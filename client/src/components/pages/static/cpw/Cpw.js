import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from './CpwPhotos';
import '../static.css';

class Cpw extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentImage: 0,
      viewerIsOpen: false,
    }
  }

  openLightbox = (e, { _photo, index }) => {
    this.setState({
      currentImage: index,
      viewerIsOpen: true
    })
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      viewerIsOpen: false
    })
  }

  componentDidMount() {
    document.title = 'Gallery';
  }

  render() {
    const {
      currentImage,
      viewerIsOpen
    } = this.state;
    return (
      <div className='display-page' id='cpw'>
        <h1>Gallery</h1>
	    <p>At the end of each semester, DanceTroupe hosts dance shows for the MIT and greater Boston community to enjoy! Here are some photos from those shows to give you a taste of what DT is like :)</p>
        <Gallery direction='column' photos={photos} onClick={this.openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={this.closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.caption
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }
}

export default Cpw;
