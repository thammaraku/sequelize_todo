module.exports = 
{
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "todolist",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  }

  "production": {
    "use_env_variable": "mysql://w9z78s9xdt32ladt:wotdni9g32n5dwyo@hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/yu9sy6adet3bpqn8",
    "dialect": "mysql"
}

