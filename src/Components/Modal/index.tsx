import { ReactNode } from 'react'

import './styles.css'

type Functions = {
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void
}

type Children = {
    children: ReactNode;
}
export function Modal(props: Functions & Children) {
    return (
        <div className="modal">
            <div className="modal-container">
                <div className="button-holder">
                    <button className="close-btn" onClick={props.onClose} />
                </div>
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}