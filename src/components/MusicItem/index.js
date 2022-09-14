import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const MusicItem = props => {
  const {item, deleteMusic} = props
  const {id, imageUrl, name, genre, duration} = item

  const deleteItem = () => {
    deleteMusic(id)
  }

  return (
    <li className="list-item">
      <div className="text-container">
        <img className="image" src={imageUrl} alt="track" />
        <div className="text">
          <h1 className="name">{name}</h1>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="time-btn">
        <p className="time">{duration}</p>
        <div className="btn-container">
          <button className="btn" onClick={deleteItem} type="button">
            <AiOutlineDelete className="del-logo" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default MusicItem
