export const parseImageName = (str, person) => {
  let match = str?.match(/^((.*)\/)?([^\/]+)[.]([^.]+)$/) ?? [];
  match[2] = match[2] ?? person;
  return match.slice(2);
};
