import React from 'react';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import PopularSong from './popularSong.jsx';
import Listeners from './listeners.jsx';
import styles from './styles/relatedArtist.css';

class RelatedArtistEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupHidden: true,
      isListenersHidden: true,
    };

    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState({
      isPopupHidden: !this.state.isPopupHidden,
    });
  }

  render() {
    return (
      <div>
        <table styleName="RAEntryContainer">
          <div onClick={this.togglePopup}>
            <tr styleName="RAEntry">
              <td>
                <Image
                  src={this.props.artist.artist_image}
                  circle
                  width="50"
                  height="50"
                />
              </td>
              <td styleName="RAname">{this.props.artist.artist_name}</td>
              <td>
                <div styleName="RAListeners">
                  <Listeners artist={this.props.artist} />
                </div>
              </td>
              <td styleName="PopularSong">
                {!this.state.isPopupHidden && (
                  <PopularSong artist={this.props.artist} />
                )}
              </td>
            </tr>
          </div>
        </table>
      </div>
    );
  }
}

export default CSSModules(RelatedArtistEntry, styles);
