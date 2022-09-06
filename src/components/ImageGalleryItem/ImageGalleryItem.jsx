import React, { Component } from 'react';
import axios from 'axios';

let images = [];
let wait = true;

export class ImageGalleryItem extends Component {
  state = {
    status: 'panding',
  };

  async componentDidUpdate(prevProps, prevState) {
    // this.setState({ status: 'panding' });
    const response = await axios.get(
      `https://pixabay.com/api/?key=29442752-af1c576492f51578172834418&q=${
        this.props.searchText
      }&image_type=photo&orientation=orientation&safesearch=true&page=${String(
        this.props.page
      )}&per_page=12`
    );
    if (prevProps.searchText !== this.props.searchText) {
      images = response.data.hits;
    } else if (prevProps.page !== this.props.page) {
      images = [...images, ...response.data.hits];
    }
    if (prevProps.images !== images) {
      this.props.onUpdate(images);
    }
    // this.setState({ status: 'resolved' });
    wait = false;
  }

  render() {
    if (wait === true && this.props.searchText !== '') {
      //(this.state.status === 'pebding') {
      return <div>WAIT...</div>;
    }
    if (wait === false) {
      //(this.state.status === 'resolved') {
      return images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li className="ImageGalleryItem" key={id}>
          <img
            src={webformatURL}
            alt={tags}
            className="ImageGalleryItem-image"
            onClick={() => {
              this.props.modalShow(largeImageURL);
            }}
          />
        </li>
      ));
    }
  }
}

export default ImageGalleryItem;
