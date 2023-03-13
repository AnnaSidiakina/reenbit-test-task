import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";
import Container from "../Container/Container";
import PropTypes from "prop-types";

const Paginate = ({ total, handleClick, page }) => {
  return (
    <Container>
      <div className={styles.container}>
        <ReactPaginate
          pageCount={total}
          onPageChange={handleClick}
          forcePage={page - 1}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageClassName={styles.page}
          pageLinkClassName={styles.link}
          previousClassName={styles.page}
          previousLinkClassName={styles.link}
          nextClassName={styles.page}
          nextLinkClassName={styles.link}
          breakLabel="..."
          breakClassName={styles.page}
          breakLinkClassName={styles.link}
          containerClassName={styles.paginate}
          activeClassName={styles.active}
          renderOnZeroPageCount={null}
          disabledClassName={styles.disable}
          nextLabel=">"
          previousLabel="<"
        />
      </div>
    </Container>
  );
};
Paginate.propTypes = {
  total: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
export default Paginate;
