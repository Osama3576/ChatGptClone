/* eslint-disable react-hooks/rules-of-hooks */

import getCurrentUser from '../actions/getCurrentUser';

import Main from './components/Main';

async function page() {
  const { email, name, image } = await getCurrentUser();
  if (!email || !name || !image) return null;

  const currentUser = {
    email,
    name,
    image,
  };

  return <Main currentUser={currentUser} />;
}

export default page;
