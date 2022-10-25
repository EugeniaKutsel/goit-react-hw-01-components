import FriendListItem from "./FriendListItem";
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
    <ul className={css.friend__list}>
        {elements}
    </ul>
  )
}

export default FriendList;