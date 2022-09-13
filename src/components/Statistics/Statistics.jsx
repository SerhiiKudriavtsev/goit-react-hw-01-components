import PropTypes from 'prop-types';
import { StatisticsCard, Item, Title, StatList, Label, Percentage } from "./Statistics.styled"

export const Statistics = ({ title, upload }) => {
  return (
    <StatisticsCard>
      {title ? <Title>{title}</Title> : ''}

      <StatList>
        {upload.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsCard>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  upload: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
}