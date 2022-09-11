import { List, Item, Status, Avatar, Name} from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  const dataItems = friends.map(({ avatar, name, isOnline, id }) => (
    <Item key={id}>
      <Status isOnline={isOnline}/>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  ));
  return (
    <List>{dataItems}</List>
  )
}