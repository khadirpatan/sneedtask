import React, { Component } from 'react';
import _ from 'lodash';
class Pagination extends Component {
    state = {}
    render() {
        const { itemsCount, pageSize, currentPage } = this.props;
        const pagesCount = Math.ceil(itemsCount / pageSize);
        if (pagesCount === 1) return null;
        const pages = _.range(1, pagesCount + 1)

        return (<p>
            <nav>
                <ul className="pagination">
                    {pages.map(page => (
                        <li key={page} className={
                            page === currentPage ? 'page-item active' : 'page-item'
                        }><a className="page-link" style={{"cursor":"pointer"}}
                            onClick={()=>this.props.onPageChange(page)}
                        >{page}</a></li>
                    ))}

                </ul>
            </nav>
        </p>);
    }
}

export default Pagination;