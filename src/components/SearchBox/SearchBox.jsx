import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter); // беремо поточне значення фільтра

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value)); // змінюємо фільтр у Redux
  };

  return (
    <div className={css.searchBox}>
      <label className={css.label}>
        Пошук контактів за імʼям:
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={handleChange}
          placeholder="Введіть ім'я"
        />
      </label>
    </div>
  );
}
