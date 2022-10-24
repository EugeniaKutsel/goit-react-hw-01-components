import FriendListItem from "./FriendListItem";

const FriendList = ({friends}) => {
  const elements = friends.map(friend =>
    <FriendListItem
      key={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />)
  
  return (
    <ul className="friend-list">
        {elements}
    </ul>
  )
}

export default FriendList;