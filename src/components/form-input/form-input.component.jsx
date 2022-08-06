import "./form-input.styles.scss";

const FormInput = ({ labelOptions, inputOptions }) => {
    const { label } = labelOptions;
    return (
        <div className="form-input-label-container">
            {label && <label className={`form-input-label ${inputOptions.value.length ? 'shrink' : ''}`} {...labelOptions}>{label}</label>}
            <input className="form-input" {...inputOptions} />
        </div>
    )
}

export default FormInput;