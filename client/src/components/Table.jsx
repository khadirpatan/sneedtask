import React, { Component } from 'react';
import Modal from "./Modal";
import Pagination from "./Pagination"
import axios from "axios";
import _ from 'lodash';
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showmodal: false,
            rowData: [],
            workSpaceData: [],
            pageSize: 10,
            currentPage: 1
        }
    }
    async componentDidMount() {
        const data = await axios.get("http://localhost:9090/");
        this.setState({ workSpaceData: data.data })

    }

    handleClick = (data) => {
        this.setState({ showmodal: true, rowData: data });

    }
    paginate(items, pageNumber, pageSize) {
        const startIndex = (pageNumber - 1) * pageSize;
        return _(items).slice(startIndex).take(pageSize).value();
    }
    handleClose = () => {
        this.setState({ showmodal: false, rowData: [] })
    }
    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    updateData = (id, availability) => {
        const data = [...this.state.workSpaceData];
        data.map(obj => {
            if (obj.workspaceid === id) {
                obj.availability = availability;
            }
        });
        this.setState({ workSpaceData: data });
    }

    render() {
        const { workSpaceData, pageSize, currentPage } = this.state;
        const count = workSpaceData.length;
        if (count === 0) return (<p>Currently Workspaces are not available</p>);
        const worksapces = this.paginate(workSpaceData, currentPage, pageSize);
        return (
            <div id="table" className="container">

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Workspace Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">Availability</th>
                        </tr>
                    </thead>
                    <tbody>

                        {worksapces.map((data,index) => {
                            return (
                                <tr key={data.workspaceid} onClick={e => this.handleClick(data)}
                                    style={{ "cursor": "pointer" }}>
                                    <td>{index+1}</td>
                                    <td>{data.workspacename}</td>
                                    <td>{data.type}</td>
                                    <td>{data.capacity}</td>
                                    <td>{data.availability ? "Available" : "Booked"} </td>
                                </tr>
                            );

                        })}



                    </tbody>
                </table>
                <Pagination
                    itemsCount={count}
                    pageSize={this.state.pageSize}
                    onPageChange={this.handlePageChange}
                    currentPage={this.state.currentPage}
                />

                {this.state.showmodal ?
                    <Modal
                        onClick={this.handleClose}
                        data={this.state.rowData}
                        updateData={this.updateData}
                    /> : null}
            </div>
        );
    }
}

export default Table;