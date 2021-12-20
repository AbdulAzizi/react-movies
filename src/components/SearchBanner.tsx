import { useState } from "react";
import { Button } from "../stories/button/Button";
import { TextField } from "../stories/textField/TextField";
import { bindActionCreators } from "redux";
import { setSearchString } from "../state/modules/filters/filtersActionCreator";
import { useDispatch } from "react-redux";

const SearchBanner = () => {
	const [searchValue, setSearchValue] = useState("");
	const setSearchStringActionCreator = bindActionCreators(setSearchString, useDispatch());
	return (
		<div style={{ overflow: "hidden", position: "relative" }}>
			<div
				style={{
					backgroundImage:
						"url(https://s.studiobinder.com/wp-content/uploads/2019/12/The-Best-Order-to-Watch-Marvel-Movies-Featured-StudioBinder.jpg.webp)",
					filter: "blur(4px)",
					WebkitFilter: "blur(4px)",
					height: "100%",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					position: "absolute",
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				}}
			></div>
			<div
				style={{
					backgroundColor: "rgb(0 0 0 / 70%)",
					position: "relative",
				}}
			>
				<div style={{ maxWidth: "1000px", margin: "auto", padding: "100px 20px" }}>
					<h1
						style={{
							fontWeight: 300,
							color: "#fff",
							textTransform: "uppercase",
							paddingBottom: "40px",
						}}
					>
						Find your movie
					</h1>
					<div style={{ display: "flex", flexWrap: "wrap" }}>
						<div style={{ flex: "0 0 75%", paddingRight: "15px", boxSizing: "border-box" }}>
							<TextField
								value={searchValue}
								transparent
								outline={false}
								name="search"
								label="Search"
								onInput={(e) => setSearchValue((e.target as HTMLInputElement).value)}
							/>
						</div>
						<Button
							style={{
								flex: "0 0 25%",
							}}
							color="#f65262"
							onClick={() => setSearchStringActionCreator(searchValue)}
						>
							Search
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchBanner;
