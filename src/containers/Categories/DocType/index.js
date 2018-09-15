import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { fetch } from 'actions/doc_type';

class DocType extends Component {
  ư

  state = {
    data: [{ index: 1, name: 'abc' }, { index: 2, name: '1abc' }]
  }
  componentDidMount() {
    fetch().then(({ data }) => {
      // this.setState({data: data.data})
      console.log(data)
    })
  }
  render() {
    const selectRow = {
      mode: 'radio' //radio or checkbox
    };
    const cellEdit = {
      mode: 'dbclick',
      blurToSave: true,
    };
    return (
      <div style={{ padding: '15px' }}>
        <BootstrapTable data={this.state.data}
          selectRow={ selectRow } version='4' insertRow  striped hover
          deleteRow cellEdit={ cellEdit }>
          <TableHeaderColumn isKey dataField='index' dataSort={ true }>STT</TableHeaderColumn>
          <TableHeaderColumn dataField='name' dataSort={ true }>Tên loại tài liệu</TableHeaderColumn>
        </BootstrapTable>,
      </div>
    )
  }
}

export default DocType;