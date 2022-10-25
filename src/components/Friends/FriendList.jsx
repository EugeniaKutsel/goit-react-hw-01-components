import FriendListItem from "./FriendListItem";
import PropTypes from 'prop-types';
import css from "../Friends/Friends.module.css";

const FriendList = ({friends}) => {
  const elements = friends.map(friend =>
    <FriendListItem
      key={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />)
  
  return (
    <ul className={css.friendList}>
        {elements}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isInline: PropTypes.bool,
    id: PropTypes.number.isRequired,
  }))
}


export default FriendList;