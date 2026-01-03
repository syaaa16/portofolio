export default function Button({children,variant= 'primary', type = 'button', onClick, }) {
    return(
        <button
        type={type}
        className={variant}
        onClick = {onClick}
        >
            {children}
        </button>
    )
}