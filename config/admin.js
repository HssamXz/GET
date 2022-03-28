module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fd3d2f2b95311efdd23c823a5fe21ea3'),
  },
});
