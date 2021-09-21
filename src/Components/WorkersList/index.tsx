import { useState, useEffect } from 'react'

import { Card } from '../Card'

import { firebase } from '../../services/firebase'

type Worker = {
    id: string;
    name: string;
    cpf: string;
    salary: string;
    address: string;
    telephone: string;
}

export function WorkersList() {
    const [workerList, setWorkerList] = useState<Worker[]>([])


    useEffect(() => {
        const workerRef = firebase.database().ref("Workers")
        workerRef.on("value", (snapshot) => {
            const workerVal = snapshot.val()
            const workerListAux = []

            for (let id in workerVal) {
                workerListAux.push({ id, ...workerVal[id] })
            }

            setWorkerList(workerListAux)
        })
    }, [])

    return (
        <div className="card-list">
            {workerList.map((worker, id) => {
                return (
                    <Card
                        key={id}
                        id={worker.id}
                        name={worker.name}
                        cpf={worker.cpf}
                        salary={worker.salary}
                        address={worker.address}
                        telephone={worker.telephone}
                    />
                )
            })}
        </div>
    )
}

