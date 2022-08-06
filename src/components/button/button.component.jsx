import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted"
}

const Button = ({ type, children, buttonStyle }) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonStyle]}`} type={type}>{children}</button>
    )
}

export default Button;