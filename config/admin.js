module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '40c6766f14aaef0404fdd3e9bbdf27ea'),
  },
});
