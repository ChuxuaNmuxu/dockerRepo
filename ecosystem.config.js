module.exports = {
  apps : [{
    name      : 'myApp',
    script    : './src/app.js',
    env: {
      NODE_ENV: "development",
      COMMON_VARIABLE: 'true'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  // deploy : {
  //   production : {
  //     user : 'root',
  //     host : '119.23.68.231',
  //     port: '29999',
  //     ref  : 'origin/master',
  //     repo : 'git@gitee.com:microcompose/node-backend.git',
  //     path : '/var/www/production',
  //     ssh_options: 'StrictHostKeyChecking=no',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
  //   }
  // }
};
