import Select from './Select';
import { useUrl } from '../hooks/useUrl';

function SortBy({ options }) {
  const { updateUrl, readUrl } = useUrl('sortBy');
  const sortBy = readUrl() || '';

  function handleChange(e) {
    updateUrl(e.target.value);
  }

  return (
    <Select
      value={sortBy}
      options={options}
      onChange={handleChange}
      type='white'
    />
  );
}

export default SortBy;
