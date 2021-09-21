import { useState, FormEvent } from 'react'
import { firebase } from '../../services/firebase'
import './styles.css'

export function Form() {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [salary, setSalary] = useState('');
    const [address, setAddress] = useState('');
    const [telephone, setTelephone] = useState('');

    function workerCreate(e: FormEvent) {
        e.preventDefault();

        const workerRef = firebase.database().ref("Workers")

        const worker = {
            name,
            cpf,
            salary,
            address,
            telephone
        }

        workerRef.push(worker);
        setName('')
        setCpf('')
        setSalary('')
        setAddress('')
        setTelephone('')
    }

    return (
        <form onSubmit={workerCreate} className="form">
            <input
                type="text"
                placeholder="Nome"
                className="input"
                value={name}
                required
                onChange={e => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="CPF"
                className="input"
                value={cpf}
                required
                onChange={e => setCpf(e.target.value)}
            />

            <input
                type="number"
                placeholder="Salário"
                className="input"
                value={salary}
                required
                onChange={e => setSalary(e.target.value)}
            />

            <input
                type="text"
                placeholder="Endereço"
                className="input"
                value={address}
                required
                onChange={e => setAddress(e.target.value)}
            />

            <input
                type="number"
                placeholder="Telefone"
                className="input"
                value={telephone}
                required
                onChange={e => setTelephone(e.target.value)}
            />

            <button className="button-add" type="submit">Cadastrar funcionário</button>
        </form>
    )
}
