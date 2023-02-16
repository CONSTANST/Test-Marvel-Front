const Limit = ({limit, handleLimitChange}) => {
  return (
    <div>
      <label htmlFor="limit-select" style={{color: "lightgray"}}>
        Characters per page:
      </label>
      <select id="limit-select" value={limit} onChange={handleLimitChange}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};
export default Limit;
