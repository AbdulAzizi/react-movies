import { ButtonProps, Button } from "../button/Button";
import "./toggleButton.css";
interface ToggleButtonProps extends ButtonProps {
	value: string;
}
export const ToggleButton = (props: ToggleButtonProps) => {
	return <Button {...props}>{props.children}</Button>;
};
