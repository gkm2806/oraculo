const Auth = (Component, user, permission,fail= null,loading=false) => 
  (user.permission >= permission && !loading) ? (
    Component
  ):(
    fail
  )

export default Auth