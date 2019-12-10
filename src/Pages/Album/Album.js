import React, { Component } from 'react';
import "./Album.scss";
import Iframe from 'react-iframe'
import { withRouter } from 'react-router-dom'
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../Services/api';
import { millisToMinutesAndSeconds } from '../../Helpers/functions';

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albumId: this.props.match.params.id,
      albumInfo: null,
      albumTracks: [],
      previewUrl: null,
    };

    this.requestAlbum();
    this.requestTracks();
  }

  requestAlbum = () => {
    const { albumId } = this.state;
    
    api.get(`/albums/${albumId}`, {})
      .then(response => { 
        this.setState({
          albumInfo: response.data
        });
      })
      .catch(error => {
        this.props.history.push('/login');
      });
  }

  requestTracks = () => {
    const { albumId } = this.state;

    api.get(`/albums/${albumId}/tracks`, {})
      .then(response => { 
        this.setState({
          albumTracks: response.data.items,
        });
      })
      .catch(error => {
        this.props.history.push('/login');
      });
  }

  playMusic = (previewUrl) => {
    if (previewUrl) {
      this.setState({
        previewUrl
      });
    } else {
      toast.info(`Esta música não possui preview`, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  render() {
    const { albumInfo, albumTracks, previewUrl } = this.state;
    
    return (
      <section className="album">
        <ToastContainer autoClose={3000} />

        <h3 className="back-label"><a onClick={() => this.props.history.push('/home')}>‹ Voltar</a></h3>

        <div className="box-album-info">
          { albumInfo && (
            <>
              <div className="container-image">
                <img src={albumInfo.images[0].url} className="album-image" alt="album" />
              </div>

              <div className="container-text">
                <p className="album-title">{albumInfo.name}</p>
                <p className="album-artist">{albumInfo.artists[0].name}</p>
              </div>
            </>
          )}
        </div>

        <div className="box-album-tracks">
          <ul className="group-tracks">
            { albumTracks && albumTracks.map((track, i) => (
                <li key={track} className={'track-item'} onClick={() => this.playMusic(track.preview_url)}>
                  <div className="container-text">
                    <span className="track-index">{i + 1}.</span>
                    <span className="track-title">{track.name}</span>
                    <span className="track-time">{millisToMinutesAndSeconds(track.duration_ms)}</span>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>

        { previewUrl && (
          <Iframe url={previewUrl}
            width="100%"
            height="200px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/>
        )}
        
      </section>
    );
  }
}

export default withRouter(Album);