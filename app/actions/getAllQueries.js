const getAllQueries = async () => {
  try {
    const res = await fetch('/api/sendquery');
    const data = await res.json();

    return data;
  } catch (error) {
    return [];
  }
};

export default getAllQueries;
