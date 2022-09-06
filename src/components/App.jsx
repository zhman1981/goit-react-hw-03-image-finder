import React, { Component } from 'react';
import './styles.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    searchText: '',
    page: 1,
    images: [],
    largeImageURL: '',
  };

  toggleModal = url => {
    this.setState({ largeImageURL: url });
  };

  onModalClose = () => {
    this.setState({ largeImageURL: '' });
  };

  onSubmit = searchText => {
    if (this.state.searchText !== searchText) {
      this.setState({ searchText, page: 1, images: [] });
    }
  };

  onUpdate = images => {
    this.setState({ images });
  };

  onClickLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { searchText, page, images, largeImageURL } = this.state;
    return (
      <div className="App">
        {this.state.largeImageURL && (
          <Modal
            largeImageURL={largeImageURL}
            onModalClose={this.onModalClose}
          />
        )}
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem
            searchText={searchText}
            page={page}
            images={images}
            onUpdate={this.onUpdate}
            modalShow={this.toggleModal}
          />
        </ImageGallery>
        {!images.length || <Button onClick={this.onClickLoadMore} />}
      </div>
    );
  }
}

export default App;
