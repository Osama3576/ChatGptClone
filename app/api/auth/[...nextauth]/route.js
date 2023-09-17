import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

import GoogleProvider from 'next-auth/providers/google';
import dbConnect from '@/app/libs/dbConnect';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '@/app/libs/mongodbClient';
import User from '@/app/models/UserModel';

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password)
          throw new Error('fill  all fields');
        await dbConnect();
        //get user eamil check
        const user = await User.findOne({
          email: credentials.email,
        });
        if (!user || !user?.hashedPassword)
          throw new Error('User Not found');

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        if (!isCorrectPassword) throw new Error('Invalid Password');

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// {

//   callbacks: {
//     async signIn(user, account, profile) {
//       // Here, you can create or update the user in your database
//       // Example using Mongoose:
//       const User = require('../../../models/User') // Adjust the path as needed
//       const existingUser = await User.findOne({ email: user.email })

//       if (existingUser) {
//         // Update the user's information if needed
//         // For example, if you want to update the user's name:
//         existingUser.name = user.name
//         await existingUser.save()
//       } else {
//         // Create a new user if they don't exist in the database
//         await User.create({
//           email: user.email,
//           name: user.name,
//         })
//       }

//       return true // Return true to allow sign-in
//     },
//   },
//   // Add other options as needed
// }
