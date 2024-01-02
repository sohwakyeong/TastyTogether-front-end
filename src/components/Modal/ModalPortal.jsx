import ReactDom from "react-dom";

export const ModalPortal = ({children}) => {
    const el = document.getElementById("modal");
    return ReactDom.createPortal(children,el);
};