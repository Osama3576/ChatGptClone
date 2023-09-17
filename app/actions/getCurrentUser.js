import getSession from './getSession';
import User from '../models/UserModel';
import dbConnect from '../libs/dbConnect';

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }
    await dbConnect();
    const currentUser = await User.findOne({
      email: session.user.email,
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error) {
    return null;
  }
};

export default getCurrentUser;
