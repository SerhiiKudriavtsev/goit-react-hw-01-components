import PropTypes from 'prop-types';
import { StatisticsCard, Item, Title, StatList, Label, Percentage } from "./Statistics.styled"

export const Statistics = ({ title, upload }) => {
  const dataItems = upload.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))
  return (
    <StatisticsCard>
      {title ? <Title>{title}</Title> : ''}

      <StatList>
        {dataItems}
      </StatList>
    </StatisticsCard>
  )
}

Statistics.propTypes = {
  upload: PropTypes.arrayOf(
    PropTypes.exact({
      key: PropTypes.number.isRequired,
    }),
  ),
}