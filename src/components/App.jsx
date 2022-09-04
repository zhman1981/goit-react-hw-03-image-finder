import React, { Component } from 'react';
import './styles.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';

export class App extends Component {
  state = {
    searchText: '',
    page: 1,
    total: 0,
  };

  onSubmit = searchText => {
    if (this.state.searchText !== searchText) {
      this.setState({ searchText, page: 1, total: 0 });
    }
  };

  onUpdate = total => {
    this.setState({ total });
  };

  onClickLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem
            searchText={this.state.searchText}
            page={this.state.page}
            onUpdate={this.onUpdate}
          />
        </ImageGallery>
        <Button onClick={this.onClickLoadMore} />
      </div>
    );
  }
}

export default App;
