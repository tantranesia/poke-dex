export const handleList = (pokes) => {
  return {
    type: 'GET_POKE',
    payload: pokes,
  };
};
