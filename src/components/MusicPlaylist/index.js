import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import MusicItem from '../MusicItem'
import './index.css'

class MusicPlaylist extends Component {
  constructor(props) {
    super(props)
    const {list} = this.props
    this.state = {
      musicList: list,
      searchInput: '',
    }
  }

  searchMusic = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  filterMusic = () => {
    const {searchInput, musicList} = this.state
    return musicList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  deleteMusic = id => {
    const {musicList} = this.state
    const deleteMusicItem = musicList.filter(each => each.id !== id)
    this.setState({
      musicList: deleteMusicItem,
    })
  }

  renderMusic = () => {
    const searchList = this.filterMusic()
    if (searchList.length !== 0) {
      return (
        <ul className="music-list">
          {searchList.map(each => (
            <MusicItem
              item={each}
              deleteMusic={this.deleteMusic}
              key={each.id}
            />
          ))}
        </ul>
      )
    }
    return (
      <div className="not-found">
        <h1>No Songs Found</h1>
      </div>
    )
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Ed Sheeran</h1>
          <p className="sub-heading">Singer</p>
        </div>
        <div className="music-container">
          <div className="playlist-text">
            <h1>Songs Playlist</h1>
            <div className="input-container">
              <input
                className="input"
                type="search"
                onChange={this.searchMusic}
                placeholder="Search"
                value={searchInput}
              />
              <AiOutlineSearch />
            </div>
          </div>
          {this.renderMusic()}
        </div>
      </div>
    )
  }
}

export default MusicPlaylist
