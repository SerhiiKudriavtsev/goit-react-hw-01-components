import styled from "@emotion/styled"

export const TransSection = styled.section`
  margin-bottom: ${prop => prop.theme.space[6]}px;
`;
export const TransTable = styled.table`
  width: ${p => p.theme.widths.l};
  border-radius: ${prop => prop.theme.radii.normal};
  box-shadow: ${prop => prop.theme.shadow.boxShadow};
  overflow: hidden;
`;
export const TrasThead = styled.thead`
  background: ${p => p.theme.colors.tableHeader};
  color: white;
  text-shadow: ${prop => prop.theme.shadow.textShadow};
  `;
  export const TrasTheadRow = styled.tr`
  
  `;
  
  export const TrasTheadTableHeader = styled.th`
  padding-top: ${prop => prop.theme.space[4]}px;
  padding-bottom: ${prop => prop.theme.space[4]}px;

`;

export const TransTtbody = styled.tbody``;

export const TransRow = styled.tr`
  text-align: center;
  color: ${p => p.theme.colors.secondaryText};
  :nth-of-type(odd) {
    background-color: ${p => p.theme.colors.tableRowsOdd};
  };
  :nth-of-type(even) {
    background-color: ${prop => prop.theme.colors.tableRowsEven};
  };
  `;
export const TrasRowTableData = styled.td`
  padding-top: ${prop => prop.theme.space[4]}px;
  padding-bottom: ${prop => prop.theme.space[4]}px;  
`;