import { Box } from "components/Box/Box";
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import user from 'user.json';
import data from 'data.json'

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

    </Box>
  );
};
