import React, { Component } from 'react';
import { InsertModalFooter, InsertModalHeader } from 'react-bootstrap-table';
import { fetch, update, create, deleteOne } from 'actions/organization';
import Table from 'components/Table'
class Organization extends Component {
  state = {
    data: [],
    nameInput: ''
  }

  componentDidMount() {
    this.getNewData();
  }
  componentDidUpdate(){
    console.log(this.state)
  }
  removeItem = itemId => {

    this.setState({
      data: this.state.data.filter(item => item.id !== itemId)
    });
  }

  onDeleteRow = (rowIndexs, rowDatas) => {
    console.log(rowDatas)
    if(rowDatas.length > 0){
      deleteOne(rowDatas[0].id)
      .then( ()=> { 
        this.removeItem(rowDatas[0].id);
      })
      .catch((err) => {
        this.getNewData();
        this.showNotification('Lưu thất bại! ' + err.toString(), 'error');
      })
    }
  
   
  }

  getNewData = () => {
    fetch()
      .then(({ data }) => {
      let newData = [...data.data].map((d, index) => {
        d.index = index;
        return d;
      })
      console.log(newData)
      this.setState({ data: newData })
    })
      .catch(err => {
        console.log(err)
      })
  }

  beforeSaveCell = (row, cellName, cellValue) => {
      update(row.id, {[cellName]: cellValue})
      .then(src => {
        let { data } = this.state;
        let newData = [...data]
        newData = newData.map( e => e.id === row._id ? {...e, [cellName]: cellValue}: e)
        this.setState({data: newData})
      })    
      .catch( err => {
        this.getNewData();
      })
  }

  
  handleSave = (closeModal) => {
    const { nameInput, data } = this.state;
    create({name: nameInput,id: (Math.random(9))*1000000000000000 })
    .then( ({error, data}) => {!errror ? this.setState({data: [...data, {...data,index: data.id}]}) : this.getNewData()
    })
    .catch( e=> this.getNewData())
    closeModal();
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

  customField = (value, type = 'text', placeholder = "" ) => {
    return (
      <div className="form-group">
        <input type={type} placeholder={placeholder} className="form-control edit-text" value={this.state[value]}
          onChange={ e => this.setState({ [value]: e.target.value })} />
      </div>
    )
  }

  render() {

    let cellEdit = {
      mode: 'dbclick', // click cell to edit
      beforeSaveCell: this.beforeSaveCell,
      blurToSave: true,
    };
    let options= {
      insertModalFooter: this.createCustomModalFooter,
      insertModalHeader: this.createCustomModalHeader,
      onDeleteRow: this.onDeleteRow,

    }
    let column = [
      {title:"STT", isKey: true, dataField:'index', dataSort:true, autoValue: true},
      {title:"Tên công ty", dataField:'name', dataSort: true, customInsertEditor: { getElement:() => this.customField('nameInput') }}
    ]

    return (
        <Table 
          data={this.state.data}
          column={column}
          getNewData={this.getNewData}
          cellEdit={cellEdit}
          options={options}
          typeSelect={'radio'}
        />     
    )
  }
}

export default Organization;