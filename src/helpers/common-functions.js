export const convertDate = (dateString) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var d = new Date(dateString),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  month = monthNames[month];
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join(",");
};
