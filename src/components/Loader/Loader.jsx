import { Rings } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.loader}>
    <Rings
      visible={true}
      height="80"
      width="80"
      ariaLabel="rings-loading"
      wrapperStyle={{}}
      wrapperClass="rings-wrapper"
    />
  </div>
);
