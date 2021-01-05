export const getYearFromRelease = (string) => {
  try {
    const year = string.match(/(\d{4})/g);
    return year;
  } catch (error) {
    return 'upcoming';
  }
};
