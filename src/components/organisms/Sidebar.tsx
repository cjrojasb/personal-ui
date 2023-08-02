import classNames from 'classnames';
import { ROUTES } from 'constants/routes';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const customClass = (isActive: boolean) =>
    classNames('text-blue-500 ps-2 h-9 flex items-center', {
      'border-l-4 border-l-blue-500 font-bold': isActive,
    });

  const renderedLinks = ROUTES.map(({ label, path }) => (
    <NavLink
      key={label}
      to={path}
      className={({ isActive }) => customClass(isActive)}
    >
      {label}{' '}
    </NavLink>
  ));

  return (
    <div className='sticky top-0 overflow-y-scroll flex flex-col gap-2 bg-slate-200 h-screen col-span-1 p-3 items-start'>
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
