import React, {Component}from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeArtist, getArtists } from '../action/artists'

class ArtistList extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getArtists()
  }

  render() {
    const list = this.props.artists.map((artist) => {
      return <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={ artist.id }>
          { artist.name }
          <section>
            <span className="badge badge-primary badge-pill">{ artist.genre }</span>
            <a className="badge badge-danger badge-pill text-white ml-2" 
              onClick={() => this.props.removeArtist(artist.id)}>Remove</a>
          </section>
        </li>
    })
    return <ul className="list-group">{ list }</ul>
  }
}
 

const mapStateToProps = (state) => {
  return {
    artists: state.artists
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getArtists, removeArtist }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ArtistList)
