import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import * as FakeData from "./FakeData.json"
import { Input, Tree } from 'antd';
import type { DataNode, TreeProps } from 'antd/es/tree';

interface treeModalProps {
    handleShow: Function,
    handleClose: Function,
    show: boolean,
    title: string
}

const TreeModal = (props: treeModalProps) => {
    const { show, handleClose, title } = props;
    const [searchValue, setSearchValue] = useState<string>('');
    const { Search } = Input;
    const treeData = [
        {
            title: "Blood and immune system",
            key: "Blood",
            children: [
                {
                    title: "Allergy",
                    key: "Allergy",
                    children: [
                        {
                            title: "Anaphylaxis",
                            key: "Anaphylaxis"
                        }
                    ]
                },
                {
                    title: "Anemia",
                    key: "Anemia",
                    children: [
                        {
                            title: "Anemia due to non-myeloid malignancies",
                            key: "AnemiaMalignancies"
                        },
                        {
                            title: "Anemia, aplastic",
                            key: "AnemiaAplastic",
                            children: [
                                {
                                    title: "Fanconi anemia",
                                    key: "FanconiAnemia"
                                },
                            ]
                        }
                    ]
                }
            ]
        }
    ]

    // Methods 
    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };

    return (
        <Modal show={show} onHide={() => handleClose()}>
            <Modal.Header closeButton>
                <div >
                    <span style={{ fontWeight: 700, fontSize: "22px" }}>{title}</span>
                    <span style={{
                        color: 'silver',
                        display: 'inline',
                        marginLeft: '30px',
                        fontSize: '14px'
                    }}>(Results shown in hierarchy, from Therapeutic area to Disease subtype 4)</span>
                </div>
            </Modal.Header>
            <Modal.Body>
                <Tree
                    checkable
                    onSelect={onSelect}
                    onCheck={onCheck}
                    treeData={treeData}
                />

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleClose()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal >
    )
}

export default TreeModal