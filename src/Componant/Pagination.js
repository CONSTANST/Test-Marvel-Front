const Pagination = ({limit, data, currentPage, setCurrentPage}) => {
  const pageCount = Math.ceil(data.count / limit);

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleFirst = () => {
    setCurrentPage(1);
  };

  const handleLast = () => {
    setCurrentPage(pageCount);
  };

  return (
    <div>
      <button
        onClick={handleFirst}
        disabled={currentPage === 1}
        style={{color: "lightgray"}}
      >
        &lt;&lt;
      </button>
      <button
        style={{color: "lightgray"}}
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <span style={{color: "lightgray"}}>
        Page {currentPage} of {pageCount}
      </span>
      <button
        style={{color: "lightgray"}}
        onClick={handleNext}
        disabled={currentPage === pageCount}
      >
        &gt;
      </button>
      <button
        style={{color: "lightgray"}}
        onClick={handleLast}
        disabled={currentPage === pageCount}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
