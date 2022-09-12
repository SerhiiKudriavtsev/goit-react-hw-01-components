import {FriendListSection, List, Item, Status, Avatar, Name} from "./FriendList.styled";

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