module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2eb67ceb90482cb5cfe6fb9cf08b840e'),
  },
});
