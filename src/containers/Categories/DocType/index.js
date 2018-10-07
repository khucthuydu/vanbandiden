import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton, InsertModalFooter, InsertModalHeader } from 'react-bootstrap-table';
import { fetch, update, create, deleteOne } from 'actions/doc_type';

class DocType extends Component {
  state = {
    data: [{ index: 1, name: 'abc' }, { index: 2, name: '1abc' }],
    nameInput: ''
  }

  removeItem = itemId => {
    this.setState({
      data: this.state.data.filter(item => item.id !== itemId)
    });
  }

  componentDidMount() {
    this.getNewData();
  }

  getNewData = () => {
    fetch().then(({ data }) => {
      let newData = [...data.data].map((d, index) => {
        d.index = index + 1;
        return d;
      })
      // this.setState({ data: newData })
    })
      .catch(err => {
        console.log(err)
      })
  }

  beforeSaveCell = (row, cellName, cellValue) => {
    try {
      console.log(row, cellName, cellValue)
      // await update(row._id, {[cellName]: cellValue})
    }
    catch (err) {
      console.log(err.response)
      this.getNewData();
    }
  }

  createCustomModalFooter = (closeModal, save) => {
    return (
      <InsertModalFooter
        onSave={() => this.handleSave(closeModal)} />
    );
  }

  createCustomModalHeader = (closeModal, save) => {
    return (
      <InsertModalHeader
        hideClose={ true }
        // className='my-custom-class'
        title='Tạo mới'
        // beforeClose={ this.beforeClose }
        // onModalClose={ () => closeModal() }
      />
    );
  
  }

  handleInputChange = (state) => (e) => {
    this.setState({ [state]: e.target.value })
  }

  customNameField = (column, attr, editorClass, ignoreEditable) => {
    return (
      <div className="form-group">
        <input type="text" placeholder="Name" className="form-control edit-text" value={this.state.nameInput}
          onChange={this.handleInputChange('nameInput')} />
      </div>
    )
  }

  handleSave = (closeModal) => {
    const { nameInput } = this.state;
    console.log(this.state)
    closeModal();
  }


  onDeleteRow = (rowIndexs, rowDatas) => {
    console.log(rowIndexs, rowDatas)
    try {
      // await deleteOne(rowDatas['0']._id)
    }
    catch (err) {
      this.getNewData();
      this.showNotification('Lưu thất bại! ' + err.toString(), 'error');
    }
  }

  render() {
    const options = {
      sizePerPage: 20,
      prePage: 'Previous',
      nextPage: 'Next',
      firstPage: 'First',
      lastPage: 'Last',
      hideSizePerPage: true,
      onDeleteRow: this.onDeleteRow,
      insertModalFooter: this.createCustomModalFooter,
      insertModalHeader: this.createCustomModalHeader
    };

    const cellEdit = {
      mode: 'dbclick', // click cell to edit
      beforeSaveCell: this.beforeSaveCell,
      blurToSave: true,
    };

    const selectRow = {
      mode: 'checkbox' //radio or checkbox
    };
    return (
      <div style={{ padding: '15px' }}>
        <BootstrapTable data={this.state.data}
          options={options} pagination={true}
          selectRow={selectRow} version='4' insertRow striped hover
          deleteRow cellEdit={cellEdit}>
          <TableHeaderColumn
            isKey dataField='index' dataSort={true} autoValue
          >STT</TableHeaderColumn>
          <TableHeaderColumn dataField='name' dataSort={true}
            customInsertEditor={{ getElement: this.customNameField }}>
            Tên loại tài liệu</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default DocType;