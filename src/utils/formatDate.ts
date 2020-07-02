const formatDate = (value: Date): string => {
  const date = new Date(value);

  const day = date.getDay() < 9 ? `0${date.getDay()}` : date.getDay();
  const month =
    date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();

  const finalString = `${day}/${month}/${year}`;

  return finalString;
};

export default formatDate;
