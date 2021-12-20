import { ToggleButton } from "../stories/toggleButton/ToggleButton";
import { ToggleButtonGroup } from "../stories/toggleButtonGroup/ToggleButtonGroup";

interface SortByPanelProps {
	foundMoviesNumber: number;
}

const SortByPanel = ({ ...props }: SortByPanelProps) => {
	const { foundMoviesNumber } = { ...props };
	const sortBy = "realease_date";
	const handleSortClick = () => {};
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
					<div style={{ margin: "auto", marginRight: "15px", fontWeight: 300 }}> SORT BY</div>
					<ToggleButtonGroup value={sortBy} onChange={handleSortClick} size="small" color="#f65262">
						<ToggleButton value="realease_date" className={sortBy === "realease_date" ? "active" : ""}>
							Realease date
						</ToggleButton>
						<ToggleButton value="rating">Rating</ToggleButton>
					</ToggleButtonGroup>
				</div>
			</div>
		</div>
	);
};

export default SortByPanel;
