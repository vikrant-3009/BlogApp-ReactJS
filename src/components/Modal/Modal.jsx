import React from "react";
import ReactDOM from "react-dom";

import classes from "./modal.module.css";

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose} />
    );
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{ props.children }</div>
            <div className={classes.actions}>
                <button onClick={props.onConfirm} className={`${classes.btn} ${classes.btn_yes}`}>
                    Yes
                </button>
                <button onClick={props.onClose} className={`${classes.btn} ${classes.btn_no}`}>
                    No
                </button>
            </div>
        </div>
    );
}

const overlaysDomElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <React.Fragment>
            { 
                ReactDOM.createPortal(
                    <Backdrop onClose={props.onClose} />, 
                    overlaysDomElement
                ) 
            }
            { 
                ReactDOM.createPortal(
                    <ModalOverlay onConfirm={props.onConfirm} onClose={props.onClose}>
                        { props.children }
                    </ModalOverlay>, 
                    overlaysDomElement
                ) 
            }
        </React.Fragment>
    );
}
 
export default Modal;