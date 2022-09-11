import { Box } from "components/Box/Box";
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import user from "../../Data/user";
import data from "../../Data/data";
import friends from "../../Data/friends";

export const App = () => {
  return (
    <Box
      // pt={80}
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      bg='bgWindow'
      // pb={80}
        // fontSize={40}
        // color='#010101'
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
      <Statistics title="Upload stats" upload={data} />

      <FriendList friends={friends} />;

    </Box>
  );
};
