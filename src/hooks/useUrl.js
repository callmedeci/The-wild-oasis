import { useSearchParams } from 'react-router-dom';

export function useUrl(name) {
  const [searchParams, setSearchParams] = useSearchParams();

  function updateUrl(value) {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  }

  const readUrl = () => searchParams.get(name);

  return { readUrl, updateUrl };
}
