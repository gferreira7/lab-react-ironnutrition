import { Divider, Input } from 'antd';

// Iteration 5
function Search({ searchInput, setSearchInput, filterFruits }) {
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    filterFruits(value);
  };

  return (
    <div className='search-wrapper'>
      <Divider>Search</Divider>
      <Input value={searchInput} type="text" onChange={handleSearch} />
    </div>
  );
}

export default Search;
