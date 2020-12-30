import CatRepository from '~/repositories/CatRepository'
import AuthRepository from '~/repositories/AuthRepository'

export default ($axios) => ({
  cat: CatRepository($axios),
  auth: AuthRepository($axios),
})
