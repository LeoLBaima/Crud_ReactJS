import { useState, FormEvent } from 'react'
import firebase from 'firebase'

import { Modal } from '../Modal'
import './styles.css'

type WorkerProps = {
    id: string,
    name: string;
    cpf: string;
    salary: string;
    address: string;
    telephone: string;
}


export function Card(props: WorkerProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [salaryUpdated, setSalaryUpdated] = useState('');
    const workerId = props.id;

    async function handleEditWorker(workerId: string, e: FormEvent) {
        e.preventDefault();

        await firebase.database()
            .ref(`Workers/`)
            .child(workerId)
            .update({
                salary: salaryUpdated
            })

        setIsModalVisible(false)
    }

    async function handleDeleteWorker(workerId: string) {
        if (window.confirm('Deseja excluir o funcionário?')) {
            await firebase.database().ref(`Workers/${workerId}`).remove();
        }

    }

    return (
        <>
            <div className="card-container">
                <div className="card-icons">
                    <i className="fas fa-pencil-alt" onClick={() => setIsModalVisible(true)}></i>
                    <i className="fas fa-trash-alt" onClick={() => handleDeleteWorker(workerId)}></i>
                </div>

                <div className="worker">
                    Nome: {props.name} | CPF: {props.cpf} | Salário: R${props.salary},00 | Endereço: {props.address} | Telefone: {props.telephone}
                </div>
            </div>

            <div>
                {isModalVisible ?
                    <Modal onClose={() => setIsModalVisible(false)} >
                        <form onSubmit={(e) => handleEditWorker(workerId, e)}>
                            <input
                                type="number"
                                placeholder="Salário"
                                className="input"
                                value={salaryUpdated}
                                required
                                onChange={e => setSalaryUpdated(e.target.value)}
                            />
                            <button>Alterar</button>
                        </form>
                    </Modal>
                    : null
                }
            </div>
        </>
    )
}
