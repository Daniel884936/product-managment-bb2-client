import React from 'react'
import { Modal } from 'react-bootstrap';
import SupplierListComponent from '../../pages/suppplier/supplier-list.component';

class SupplierModalComponent extends React.Component{
    constructor(props){
        super();
    }

    render(){
        
        let{show, setShow, suppliers, addNewSupplier} = this.props;
        return (
        <Modal
            show= {show}
            onHide = {() => setShow(false)}
            dialogClassName ="modal-150w"
            aria-labelledby="example-custom-modal-styling-title"
            >
            <Modal.Header closeButton>
                <Modal.Title>
                Supplier
                
                <button onClick={addNewSupplier} type="button" name=""  className="btn btn-info btn-sm pl-5 pr-5 ml-2">
                        <i className="fas fa-plus"></i> Add new Supplier
                </button>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SupplierListComponent addSupplierFromList ={this.props.addSupplierFromList} enableAddButton = {true} suppliers ={suppliers}></SupplierListComponent>
            </Modal.Body>
        </Modal>
        )
    }
}

export default SupplierModalComponent;