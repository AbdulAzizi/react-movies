import { bindActionCreators } from "redux";
import { ToggleButton } from "../stories/toggleButton/ToggleButton";
import { ToggleButtonGroup } from "../stories/toggleButtonGroup/ToggleButtonGroup";
import { setSortBy } from "../state/modules/filters/filtersActionCreator";
import { useDispatch } from "react-redux";

interface SortByPanelProps {
	foundMoviesNumber: number;
	sortBy: "release_date" | "rating";
}

const SortByPanel = (props: SortByPanelProps) => {
	const foundMoviesNumber = props.foundMoviesNumber;
	const sortBy = props.sortBy;
	const setSortByActionCreator = bindActionCreators(setSortBy, useDispatch());

	const handleSortClick = (e: any) => {
		setSortByActionCreator(e.target.value);
		console.log(e.target.value);
	};
	return (
		<div style={{ backgroundColor: "#555" }}>
			<div
				style={{
					maxWidth: "1000px",
					margin: "auto",
					padding: "10px 20px",
					color: "white",
					display: "flex",
					justifyContent: "space-between",
					flexFlow: "row wrap",
				}}
			>
				<span style={{ margin: "auto 0", fontWeight: 900 }}>{foundMoviesNumber} movies found</span>
				<div style={{ display: "flex", alignContent: "center" }}>
					<div style={{ margin: "auto", marginRight: "15px", fontWeight: 300 }}> Sort bY</div>
					<ToggleButtonGroup value={sortBy} onChange={handleSortClick} size="small" color="#f65262">
						<ToggleButton value="release_date" className={sortBy === "release_date" ? "active" : ""}>
							Realease date
						</ToggleButton>
						<ToggleButton value="rating" className={sortBy === "rating" ? "active" : ""}>
							Rating
						</ToggleButton>
					</ToggleButtonGroup>
				</div>
			</div>
		</div>
	);
};

export default SortByPanel;
