export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/defunkt");
  return await response.json();
};
