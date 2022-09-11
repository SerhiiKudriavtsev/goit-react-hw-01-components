import styled from "@emotion/styled"

export const FriendList = styled.div``;

export const List = styled.ul`
  width: ${prop => prop.theme.widths.s};
  `;
  export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${prop => prop.theme.space[4]}px;
  margin-bottom: ${prop => prop.theme.space[4]}px;
  background-color: ${prop => prop.theme.colors.primaryBg};
  border-radius: ${prop => prop.theme.radii.normal};
`; 
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    return (isOnline ? 'green' : 'red');
  }};
  margin-right: 10px;
`;
export const Avatar = styled.img``;
export const Name = styled.p``;  