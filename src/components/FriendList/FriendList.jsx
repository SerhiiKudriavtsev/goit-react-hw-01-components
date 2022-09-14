import PropTypes from 'prop-types';
import { FriendListSection, List, Item, Status, Avatar, Name } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <FriendListSection>
      <List>
        {friends.map(({id, avatar, name, isOnline }) => (
          <Item key={id}>
            <Status isOnline={isOnline}/>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </Item>
        ))}
      </List>
    </FriendListSection>
    
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
}