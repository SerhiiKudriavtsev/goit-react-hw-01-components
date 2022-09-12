import PropTypes from 'prop-types';
import {
  TransSection,
  TransTable,
  TrasThead,
  TrasTheadRow,
  TrasTheadTableHeader,
  TransTtbody,
  TransRow,
  TrasRowTableData
} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
  const transactionRow = items.map(({ id, type, amount, currency }) => (
  <TransRow key={id}>
      <TrasRowTableData>{type}</TrasRowTableData>
      <TrasRowTableData>{amount}</TrasRowTableData>
      <TrasRowTableData>{currency}</TrasRowTableData>
    </TransRow>));
  return (
    <TransSection>
      <TransTable>
        <TrasThead>
          <TrasTheadRow>
            <TrasTheadTableHeader>Type</TrasTheadTableHeader>
            <TrasTheadTableHeader>Amount</TrasTheadTableHeader>
            <TrasTheadTableHeader>Currency</TrasTheadTableHeader>
          </TrasTheadRow>
        </TrasThead>
      
        <TransTtbody>{transactionRow}</TransTtbody>
      </TransTable>
    </TransSection>
  )
}

TransactionHistory.propType = {
  key: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
}