export const convertDateToUnixTimestamp = (date) => {
    return Math.floor(date.getTime() / 1000);
}

export const convertUnixTimestampToDate = (unixTimestamp) => {
    const milliseconds = unixTimestamp * 1000;
    return new Date(milliseconds).toLocaleDateString();
}

export const createDate = (date, days, weeks, months, years) => {
    let newDate = new Date(date); 
    newDate.setDate(newDate.getDate() + days * 7 * weeks);
    newDate.setMonth(newDate.getDate() + months);
    newDate.setFullYear(newDate.getDate() + years);
}

export const formatData = (data) => {
    return data.map((item, index) => {
      return {
        value: item.value,
        date: convertUnixTimestampToDate(item.timestamp / 1000),
        origin: item.origin,
      };
    });
  };