import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn,} from 'react-bootstrap-table';

class Table extends Component {

  render() {
    let { column, typeSelect, data, options, cellEdit } = this.props
    const defaultOptions = {
      sizePerPage: 10,
      prePage: 'Previous',
      nextPage: 'Next',
      firstPage: 'First',
      lastPage: 'Last',
      hideSizePerPage: true,
      ...options
    };


    const selectRow = {
      mode: typeSelect || 'checkbox' //radio or checkbox
    };
    

    return (
      <div style={{ padding: '15px' }}>
        <BootstrapTable data={data}
          options={defaultOptions} pagination={true}
          selectRow={selectRow} version='4' insertRow striped hover
          deleteRow cellEdit={cellEdit}>
          {column.map((e, key) =>{
            let { dataField, title, ...rest} = e;
            return (<TableHeaderColumn dataField={dataField} key={key} {...rest}>{e.title}</TableHeaderColumn>)
          })}
        </BootstrapTable>
      </div>
    )
  }
}

export default Table;