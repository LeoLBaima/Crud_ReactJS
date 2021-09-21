import { useState } from 'react'

import { Modal } from '../../Components/Modal'
import { WorkersList } from '../../Components/WorkersList'
import { Form } from '../../Components/Form'

import './styles.css'

export function Home() {
    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <div className="container">
            <div className="title">
                <h1>Quadro de funcionários</h1>
            </div>
            <div className="content-container">
                <div className="icon-container">
                    <i className="fas fa-plus-square" onClick={() => setIsModalVisible(true)}></i>
                </div>
                <WorkersList />
            </div>
            <div>
                {isModalVisible ?
                    <Modal onClose={() => setIsModalVisible(false)} >
                        <div className="row">
                            <div className="col-md8 offset-md-1">
                                <Form />
                            </div>
                        </div>
                    </Modal>
                    : null
                }
            </div>
        </div>
    )
}

