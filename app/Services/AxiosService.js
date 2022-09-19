
// https://opentdb.com/api.php?amount=10

// @ts-ignore
export const questionServer = axios.create({
  baseURL: 'https://opentdb.com',
  timeout: 5000
})