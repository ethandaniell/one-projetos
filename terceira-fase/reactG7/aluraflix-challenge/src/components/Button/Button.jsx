import { StyledButton } from './Button.styled'

const Button = ({ children, primary = false, className, ...props }) => {
    return (
        <StyledButton {...props} primary={primary} className={className}>
            {children}
        </StyledButton>
    );
};

export default Button;