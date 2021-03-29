function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    myVarName: 'someValue'
  }
  
  //switch env using karate.env
  var environmentPath="classpath:environments/"+env
  config.environment = karate.read(environmentPath+"/environment.json")

  //karete configure for server timeout
  karate.configure('connectionTimeout','4000')
  karate.configure('readTimeout','4000')

  return config;
}