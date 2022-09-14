export const getBalance = async (name, from) => {
  const balance = await from();
  return { name, balance };
}
