export const baseURL = () => {
  const BASE_URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3100'
      : 'https://stories-api-tzveibhtrx.now.sh'

  return BASE_URL
}

export default {
  users: {
    get: {
      bySlug: slug => `/users/${slug}`
    },
    post: '/users'
  },

  stories: {
    latest: {
      get: '/stories'
    },

    post: '/stories'
  }
}
