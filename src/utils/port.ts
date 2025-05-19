export const normalizePort = (value: string) => {
  const port = parseInt(value);

  if (isNaN(port)) return value;
  if (port > 0) return port;

  return false;
};
