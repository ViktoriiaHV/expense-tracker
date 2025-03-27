import 'dotenv/config';

export default {
  expo: {
    extra: {
      firebaseDatabaseUrl: process.env.FIREBASE_DATABASE_URL,
    },
  },
};