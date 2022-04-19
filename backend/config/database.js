module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST'),
      port: env('DATABASE_PORT'),
      database: env('DATABASE_DATABASE'),
      user: env('DATABASE_USER'),
      password: env('DATABASE_PASSWORD'),
      ssl: "Amazon RDS",
    }
  }
});
