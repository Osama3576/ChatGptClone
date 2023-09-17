'use client';

import { useEffect, useState } from 'react';
import ChatInput from './ChatInput';
import GptBtn from './GptBtn';
import Navbar from './Navbar';
import SideBar from './SideBar';
import ConversationCon from './ConversationCon';
import NavDesktop from './NavDesktop';
// import putContentUser from '@/app/actions/getAi';

function Main({ currentUser }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-full overflow-hidden">
      <NavDesktop setIsOpen={setIsOpen} isOpen={isOpen} />

      <Navbar
        className="md:hidden"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <GptBtn />
      <ConversationCon currentUser={currentUser} />

      <SideBar
        currentUser={currentUser}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <ChatInput />
    </div>
  );
}

export default Main;
