//utility function for getting date in a format

export const getDate = (time) =>
  new Date(time).toLocaleDateString(undefined, {
    day: "2-digit",
    month: "long",
  });
