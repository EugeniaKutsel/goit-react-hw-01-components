import PropTypes from 'prop-types';
import css from "../Friends/Friends.module.css";

const FriendListItem = (props) => {
  const { avatar, name, isOnline } = props;
  return (
    <li className={css.item}>
      {isOnline ? <span className={css.onlineStatus}></span> : <span className={css.offlineStatus}></span>} 
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}
  
export default FriendListItem;