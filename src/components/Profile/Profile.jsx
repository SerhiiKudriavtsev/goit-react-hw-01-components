import PropTypes from 'prop-types';
import { ProfileCard, Description, Avatar, Name, Tag, Location, Stats, Block, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar
          src={avatar}
          alt="User avatar"
          // class="avatar"
        />
        <Name>{username}</Name>
        <Tag>{ tag }</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Block>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Block>
        <Block>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Block>
        <Block>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Block>
      </Stats>
    </ProfileCard>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}