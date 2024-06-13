// copyWithin() - copies a part of an array into another location in the same array.
// Scenario: a company has an array representing the work shifts of employees over a two-week period.
// Due to a last-minute change, you need to adjust the schedule by duplicating the shifts of the 
// first week into the second week.

const workSchedule = [
  // Week 1
  'Anna: 9-5', 'Henry: 10-6', 'Anna: 9-5', 'Henry: 10-6', 'Anna: 9-5', 'Henry: 10-6', 'Anna: 9-5',

  // Week 2
  'Anna: Off', 'Henry: Off', 'Anna: Off', 'Henry: Off', 'Anna: Off', 'Henry: Off', 'Anna: Off'
]

workSchedule.copyWithin(7, 0, 7)

console.log(workSchedule)

// Result

// Week 1
// 'Anna: 9-5', 'Henry: 10-6', 'Anna: 9-5', 'Henry: 10-6', 'Anna: 9-5', 'Henry: 10-6', 'Anna: 9-5',

// Week 2
// 'Anna: 9-5', 'Henry: 10-6', 'Anna: 9-5', 'Henry: 10-6', 'Anna: 9-5', 'Henry: 10-6', 'Anna: 9-5',

// By using copyWithin(7, 0, 7), you've copied the first week's shifts (from index 0 to 6) to the 
// second week's positions (starting at index 7).