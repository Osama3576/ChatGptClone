'use client';

import useRoutes from '@/app/hooks/useRoutes';
import DeskopIcons from './DeskopIcons';

function Modal() {
  const routes = useRoutes();
  return (
    <div className="w-[19rem] bg-black h-auto rounded-md absolute bottom-[4rem] left-2 ">
      <div>
        {routes.map(item => (
          <DeskopIcons
            key={item.label}
            href={item.href}
            label={item.label}
            icon={item.icon}
            active={item.active}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Modal;
