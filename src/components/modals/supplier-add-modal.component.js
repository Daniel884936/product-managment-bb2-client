import React from 'react'
import { Modal } from 'react-bootstrap';
import SupplierComponent from '../../pages/suppplier/supplier.component';

class SupplierAddModalComponent extends React.Component{
    constructor(props){
        super();
    }

    render(){
        let{countries,show, setShow} = this.props;
        return(
            <Modal
                show = {show}
                onHide = {() => setShow(false)}
                dialogClassName ="modal-150w"
                aria-labelledby="example-custom-modal-styling-title"
                >
                <Modal.Header>
                    <Modal.Title>
                        New Supplier
                    </Modal.Title>
                </Modal.Header> 
                <Modal.Body> 
                <div className="row">
                        <div className="col">
                            <SupplierComponent countries ={countries}></SupplierComponent>
                        </div>
                    </div>                                       
                </Modal.Body>

            </Modal>
        )
    }
}

export default SupplierAddModalComponent