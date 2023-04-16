import _ from "lodash";
const Pagination = ({ items, pageSize, currentPage, onPageChange,onNextClick,nextbtn }) => {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <>
      <nav>
        <ul className="pagination justify-content-center mt-5 mb-5">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                style={{ cursor: "pointer" }}
                onClick={() => onPageChange(page)}
                className="page-link"
              >
                {page}
              </a>
            </li>
          ))}
          {nextbtn &&
            <li
              className={
               "page-item"
              }
            >
              <a
                style={{ cursor: "pointer" }}
                // onClick={() => onPageChange(page)}
                onClick={()=> onNextClick(pages.length + 1)}
                className="page-link"
              >
                Next Page
              </a>
            </li>}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
