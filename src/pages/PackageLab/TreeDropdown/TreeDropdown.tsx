import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import TreeModal from './TreeModal';
import "./treeDropdown.css"

const TreeDropdown = () => {
    const [show, setShow] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("Disease hierachy")

    // Methods : 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="dark" onClick={() => setShow(true)}>{title}</Button>

            <TreeModal handleClose={handleClose} handleShow={handleShow} show={show} title={title} />
        </div>
    )
}

export default TreeDropdown