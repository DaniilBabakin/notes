import './MenuItem.scss';

type MenuItemType = {
  title: string;
  data: string;
  text: string;
};

export const MenuItem = ({ title, data, text }: MenuItemType) => {
  return (
    <>
      <li className='menu-item'>
        <p className='menu-item__title'>{title}</p>
        <p className='menu-item__text'>
          <data className='data'>{data}</data>
          {text}
        </p>
      </li>
    </>
  );
};
