const Auth = (Component, user, permission,fail) => 
  (user.permission >= permission) ? (
    Component
  ):(
    fail
  )

export default Auth