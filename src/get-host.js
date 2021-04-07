export function getHost() {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:7071'
  }

  return 'https://udacity-trivia.azurewebsites.net'
}