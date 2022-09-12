import PropTypes from 'prop-types';
import { FriendListSection, List, Item, Status, Avatar, Name } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  const dataItems = friends.map(({id, avatar, name, isOnline }) => (
    <Item key={id}>
      <Status isOnline={isOnline}/>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  ));
  return (
    <FriendListSection>
      <List>{dataItems}</List>
    </FriendListSection>
    
  )
}

FriendList.propTypes = {
  key: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}