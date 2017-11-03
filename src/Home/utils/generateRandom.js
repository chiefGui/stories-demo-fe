import faker from 'faker'

function generateRandom () {
  const user = {
    displayName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar()
  }

  return user
}

export default generateRandom
