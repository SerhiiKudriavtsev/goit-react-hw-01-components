import PropTypes from 'prop-types';
import { StatisticsCard, StatListBoard, Title, StatList, Label, Percentage } from "./Statistics.styled"

export const Statistics = ({ title, upload }) => {
  const dataItems = upload.map(({ id, label, percentage }) => (
          <StatList key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </StatList>
        ))
  return (
    <StatisticsCard>
      {title ? <Title>{title}</Title> : ''}

      <StatListBoard>
        {dataItems}
      </StatListBoard>
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