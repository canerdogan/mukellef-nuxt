export default function ({ store, error }) {
  if (!store.state.authUser) {
    error({
      message: 'Unauthenticated.',
      statusCode: 401,
    })
  }
}
