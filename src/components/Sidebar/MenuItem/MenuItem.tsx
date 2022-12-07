import { transformDate } from 'utils/transformDate';
import './MenuItem.scss';

type MenuItemType = {
  item: NotesDBType;
  handleClick: (item: NotesDBType) => void;
  isCurrent: boolean;
};

export const MenuItem = ({ item, handleClick, isCurrent }: MenuItemType) => {
  const transformedData = transformDate(item.data);
  return (
    <>
      {/* eslint-disable-next-line */}
      <li className={`menu-item ${isCurrent ? 'current' : ''}`} onClick={() => handleClick(item)}>
        <p className='menu-item__title'>{item.title}</p>
        <p className='menu-item__text'>
          <data className='data'>{transformedData}</data>
          {item.text.length >= 25 ? item.text.substring(0, 25) + '...' : item.text}
        </p>
      </li>
    </>
  );
};
