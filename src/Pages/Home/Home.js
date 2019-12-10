import React, { Component } from 'react';
import "./Home.scss";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Creators as AlbumsActions } from '../../Store/Ducks/Albums';
import { bindActionCreators } from 'redux';
import api from '../../Services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  updateAlbuns = (list) => {
    const { updateAlbums } = this.props;

    updateAlbums(list);
  }

  updateInput = async (value) => {
    const { history } = this.props;

    this.setState({
      searchValue: value,
    });

    if (value.length >= 2) {
      await api.get(`/search?q=${value}&type=album,track,artist&limit=10`, {})
      .then(response => { 
        this.updateAlbuns(response.data.albums);
      })
      .catch(error => {
        toast.info(`É necessário autenticar novamente`, {
          position: toast.POSITION.TOP_RIGHT
        });
        history.push('/login');
      });

    }
  }

  goToAlbum = (id) => {
    const { history } = this.props;

    history.push(`/album/${id}`);
  }

  render() {
    const { searchValue } = this.state;
    const { albums } = this.props;
    
    return (
      <section className="home">
        <ToastContainer autoClose={3000} />
        <h3 className="search-label">Busque por artistas, álbums ou músicas</h3>

        <div className="box-search">
          <input 
            type="text" 
            placeholder="Comece a escrever..." 
            onChange={e => this.updateInput(e.target.value)} 
            className="input-search" />
        </div>

        <div className="box-result">
          <h3 className="result-label">Resultados encontrados para "{searchValue}"</h3>

          <ul className="albums-group">
            { albums && albums.map((album, i) => (
                <li key={album + i} className={'album-item'} onClick={() => this.goToAlbum(album.id)}>
                  <div className="container-image">
                    <img src={album.images[0].url} className="album-image" alt="album" />
                  </div>
                  
                  <div className="container-text">
                    <p className="album-title">{album.name}</p>
                    <p className="album-artist">{album.artists[0].name}</p>
                  </div>
                </li>
              ))
            }

            { (!albums || albums.length === 0) && (
              <h3 className="result-label">Nenhum resultado encontrado</h3>
            )
            }
          </ul>
        </div>
        
      </section>
    );
  }
}

const mapStateToProps = state => ({
  updateAlbums: state.Albums.updateAlbums,
  albums: state.Albums.data.items,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AlbumsActions, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));