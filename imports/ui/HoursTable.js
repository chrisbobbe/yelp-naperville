import React from 'react';
import PropTypes from 'prop-types';

import Table, { TableBody, TableHead, TableRow, TableCell } from 'material-ui/Table';

const HoursTable = ({
  hours
}) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Monday</TableCell>
        <TableCell>Tuesday</TableCell>
        <TableCell>Wednesday</TableCell>
        <TableCell>Thursday</TableCell>
        <TableCell>Friday</TableCell>
        <TableCell>Saturday</TableCell>
        <TableCell>Sunday</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        {[0,1,2,3,4,5,6].map(dayInt => {
          let openingsToday = hours[0]["open"].filter(opening => opening["day"] == dayInt);
          let text = openingsToday.map(opening => {
            let start = opening["start"];
            let end = opening["end"];
            return `${start.slice(0,2)}:${start.slice(2,4)}—${end.slice(0,2)}:${end.slice(2,4)}`
          }).join(', ');
          if (text.length == 0) { text = 'closed'; }
          return <TableCell key={dayInt}>{text}</TableCell>;
        })}
      </TableRow>
    </TableBody>
  </Table>
);

HoursTable.propTypes = {
  hours: PropTypes.array,
};

export default HoursTable;
