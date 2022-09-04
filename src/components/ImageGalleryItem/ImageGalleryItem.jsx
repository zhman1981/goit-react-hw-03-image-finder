import React, { Component } from 'react';
import axios from 'axios';

export class ImageGalleryItem extends Component {
  state = {
    images: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.images && this.props.searchText) {
      const response = await axios.get(
        `https://pixabay.com/api/?key=29442752-af1c576492f51578172834418&q=${
          this.props.searchText
        }&image_type=photo&orientation=orientation&safesearch=true&page=${String(
          this.props.page
        )}&per_page=12`
      );
      if (prevProps.searchText !== this.props.searchText) {
        this.setState({ images: response.data.hits });
      } else if (prevProps.page !== this.props.page) {
        this.setState(prevState => {
          return { images: [...prevState.images, ...response.data.hits] };
        });
      }
    }
    this.props.onUpdate(this.state.images.length);
  }

  render() {
    const { images } = this.state;
    return images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <li className="ImageGalleryItem" key={id}>
        <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
      </li>
    ));
  }
}

export default ImageGalleryItem;
