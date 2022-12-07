export const transformDate = (data: number) => {
  const offset = new Date().getTimezoneOffset() * -3600
  
  const dataFromTimestamp = new Date(data + offset);
  const day = dataFromTimestamp.getDate();
  const month = dataFromTimestamp.getMonth();
  const year = dataFromTimestamp.getFullYear();
  const time = `${ifDateBelowTen(dataFromTimestamp.getHours())}:${ifDateBelowTen(dataFromTimestamp.getMinutes())}`;

  if (day === new Date().getDate()) {
    return `${time}`;
  }

  return `${ifDateBelowTen(day)}.${ifDateBelowTen(month)}.${year}`;
};

const ifDateBelowTen = (number: number) => {
  return number > 10 ? number : `0${number}`;
};
