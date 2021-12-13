import "./textField.css";

interface TextFieldProps {
	name: string;
	label?: string;
	dark?: boolean;
	outline?: boolean;
	transparent?: boolean;
}

export const TextField = ({ dark = false, transparent = false, outline = true, ...props }: TextFieldProps) => {
	return (
		<input
			placeholder={props.label ? props.label : ""}
			className={["text-field", dark && "dark", outline && "outline", transparent && "transparent"].join(" ")}
			name={props.name}
			type="text"
		/>
	);
};
