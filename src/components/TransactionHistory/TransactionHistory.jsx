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
  // const transactionRow = items.map(({ id, type, amount, currency }) => (
  // <TransRow key={id}>
  //     <TrasRowTableData>{type}</TrasRowTableData>
  //     <TrasRowTableData>{amount}</TrasRowTableData>
  //     <TrasRowTableData>{currency}</TrasRowTableData>
  //   </TransRow>));
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
      
        <TransTtbody>{
          items.map(({ id, type, amount, currency }) => (
            <TransRow key={id}>
              <TrasRowTableData>{type}</TrasRowTableData>
              <TrasRowTableData>{amount}</TrasRowTableData>
              <TrasRowTableData>{currency}</TrasRowTableData>
            </TransRow>))}
        </TransTtbody>
      </TransTable>
    </TransSection>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )
}