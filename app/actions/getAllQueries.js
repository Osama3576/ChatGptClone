const getAllQueries = async () => {
  try {
    const res = await fetch('/api/sendquery');
    const data = await res.json();

    // Check if data is undefined, and return an empty array if it is
    if (data === undefined) {
      return [];
    }

    return data;
  } catch (error) {
    return [];
  }
};

export default getAllQueries;
