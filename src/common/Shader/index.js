import { useSelector } from "react-redux";
import { selectIsShader } from "../../store";

import "./Shader.css";
import { CSSTransition } from "react-transition-group";

const Shader = () => {
    const isShader = useSelector(selectIsShader);

    return (
        <CSSTransition 
            in={isShader} 
            timeout={100} 
            classNames="Shader"
            unmountOnExit
        >
            <div className="Shader"></div>
        </CSSTransition>
    );
};

export default Shader;