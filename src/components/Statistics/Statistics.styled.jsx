import styled from "@emotion/styled";

export const StatisticsCard = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${p => p.theme.widths.s};
  margin-bottom: ${prop => prop.theme.space[6]}px;
  background-color: ${prop => prop.theme.colors.primaryBg};
  border-radius: ${prop => prop.theme.radii.normal};
  box-shadow: 10px 10px 15px -3px rgba(59,59,59,1);
  overflow: hidden;
`;

// export const StatListBoard = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
export const Title = styled.h2`
  color: ${prop => prop.theme.colors.secondaryText};
  text-transform: uppercase;
  padding: ${prop => prop.theme.space[5]}px;
`;

export const StatList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0px;
  width: 100%;
  margin: 0px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20%;
  padding-top: ${prop => prop.theme.space[4]}px;
  padding-bottom: ${prop => prop.theme.space[4]}px;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  color: ${prop => prop.theme.colors.whiteText};
  margin-bottom: ${prop => prop.theme.space[2]}px;
`;
export const Percentage = styled.span`
  color: ${prop => prop.theme.colors.whiteText};
  font-size: ${prop => prop.theme.fontSizes.l};
  `;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}