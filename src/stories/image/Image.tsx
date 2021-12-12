import { ReactNode } from "react";
import "./image.css";

interface ImageProps {
	contain?: boolean;
	src: string;
	children?: ReactNode;
}

export const Image = ({ contain = true, src = "https://picsum.photos/300/200", ...props }: ImageProps) => {
	return <img style={{ width: contain ? "auto" : "100%" }} className="image" src={src} alt="" />;
};
