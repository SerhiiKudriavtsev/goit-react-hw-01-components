import styled from "@emotion/styled";


export const ProfileCard = styled.div`
  width: ${prop => prop.theme.widths.s};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: ${prop => prop.theme.space[6]}px;
  margin-bottom: ${prop => prop.theme.space[6]}px;
  background-color: ${prop => prop.theme.colors.primaryBg};
  border-radius: ${prop => prop.theme.radii.normal};
  box-shadow: ${prop => prop.theme.shadow.boxShadow};
  overflow: hidden;
`;

export const Description = styled.div`
  // padding-left: ${prop => prop.theme.space[7]}px;
  // padding-right: ${prop => prop.theme.space[7]}px;
  background-color: ${prop => prop.theme.colors.primaryBg}
`;

export const Avatar = styled.img`
  padding: ${prop => prop.theme.space[3]}px;
  width: ${prop => prop.theme.space[8]}px;
  height: ${prop => prop.theme.space[8]}px;
  border-radius: ${prop => prop.theme.radii.round};
  background-color: ${prop => prop.theme.colors.secondaryBg};
  margin-bottom: ${prop => prop.theme.space[6]}px;
`;

export const Name = styled.p`
  text-align: center;
  font-size: ${prop => prop.theme.fontSizes.xl};
  font-weight: ${prop => prop.theme.fontWeights.bold};
  color: ${prop => prop.theme.colors.primaryText};
  margin-bottom: ${prop => prop.theme.space[4]}px;
`;

export const Tag = styled.p`
  text-align: center;
  font-size: ${prop => prop.theme.fontSizes.m};
  color: ${prop => prop.theme.colors.secondaryText};
  margin-bottom: ${prop => prop.theme.space[4]}px;
`;

export const Location = styled.p`
  text-align: center;
  font-size: ${prop => prop.theme.fontSizes.l};
  color: ${prop => prop.theme.colors.secondaryText};
  margin-bottom: ${prop => prop.theme.space[6]}px;
  `;

export const Stats = styled.ul`
  list-style-type: none;
  margin-bottom: ${prop => prop.theme.space[0]}px;
  background-color: ${prop => prop.theme.colors.secondaryBg};
  display: flex;
  padding: 0px;
  width: 100%;
`;

export const Block = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.33%;
  padding: ${prop => prop.theme.space[5]}px;
  border: ${p => p.theme.borders.normal};
  border-color: ${prop => prop.theme.colors.border};
`;

export const Label = styled.span`
  color: ${prop => prop.theme.colors.secondaryText};
  padding-bottom: ${p => p.theme.space[2]}px;
`;

export const Quantity = styled.span`
  color: ${prop => prop.theme.colors.primaryText};
  font-size: ${prop => prop.theme.fontSizes.l};
  font-weight: ${prop => prop.theme.fontWeights.bold};
`;