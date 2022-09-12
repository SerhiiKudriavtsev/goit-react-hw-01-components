import styled from "@emotion/styled"

export const FriendListSection = styled.section`
  margin-bottom: ${prop => prop.theme.space[6]}px;
`;

export const List = styled.ul`
  width: ${prop => prop.theme.widths.s};
  `;
  export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: ${prop => prop.theme.space[4]}px;
  margin-bottom: ${prop => prop.theme.space[4]}px;
  background-color: ${prop => prop.theme.colors.primaryBg};
  border-radius: ${prop => prop.theme.radii.normal};
  box-shadow: ${prop => prop.theme.shadow.boxShadow};
`; 
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: ${prop => prop.theme.radii.round};
  background-color: ${({ isOnline }) => {
    return (isOnline ? 'green' : 'red');
  }};
  margin-right: ${prop => prop.theme.space[4]}px;
`;
export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  background-color: ${p => p.theme.colors.secondaryBg};
  border-radius: ${prop => prop.theme.radii.normal};
  margin-right: ${prop => prop.theme.space[4]}px;
`;
export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.xl};
`;  