export const reduceValueByAllKey = (array) => {
  const result = Array.from(
    array
      .reduce((acc, { value, ...r }) => {
        const key = JSON.stringify(r);
        const current = acc.get(key) || { ...r, value: 0 };
        return acc.set(key, { ...current, value: current.value + value });
      }, new Map())
      .values()
  );
  return result;
};

export const reduceValueByDate = (array) => {
  const result = Array.from(
    array.reduce(
      (item, { date, value }) => item.set(date, (item.get(date) || 0) + value),
      new Map()
    ),
    ([date, value]) => ({ date, value })
  );
  return result;
};

export const reduceByDate = array => [...array
  .reduce((acc, cur) => {
    const date = cur.date;
    const current = acc.get(date) || { date };
    return acc.set(date, { ...current, [cur.origin]: cur.value });
  }, new Map())
.values()];

export const reduceObjectByProp = (obj, prop) => {
  return obj.reduce(function (acc, item) {
    let key = item[prop];

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);

    return acc;
  }, {});
};
