const Auth = (obj, permission, RequiredPermission,fail,loading=false) => 
  (permission >= RequiredPermission && !loading) ? (
    obj
  ):(
    fail
  )

export default Auth