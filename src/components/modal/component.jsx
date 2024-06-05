import { createPortal } from "react-dom"
import { Button } from "../button/component";

export const Modal = ({ onClose, children }) => {
    return createPortal(<>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "gray",
            opacity: 0.3,
            zIndex: 1
        }}
            onClick={onClose}
        />
        <div style={{
            position: "absolute",
            left: "50vw",
            top: "50vh",
            transform: "translate(-50%, -50%)",
            zIndex: 2
        }}
        >
            <Button onClick={onClose}>Close</Button>
            {children}
        </div>
    </>,
        document.getElementById("modal")
    );
}