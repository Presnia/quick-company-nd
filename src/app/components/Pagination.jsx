import React from 'react';
import _ from 'lodash';

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return;
    const pages = _.range(1, pageCount + 1);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><button className="page-link">Previous</button></li>
                {
                    pages.map(page =>
                        <li
                            key={'page_' + page}
                            className={`page-item ${page === currentPage ? ' active' : ''}`}
                        >
                            <button
                                className="page-link"
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    )
                }
                <li className="page-item"><button className="page-link">Next</button></li>
            </ul>
        </nav>
    );
};

export default Pagination;