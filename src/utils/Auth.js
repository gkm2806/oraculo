const Auth = (Component, user, permission,fail,loading=false) => 
  (user.permission >= permission && !loading) ? (
    Component
  ):(
    fail
  )

export default Auth