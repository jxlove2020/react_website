import React from "react";

function LeftMenu(props) {
	return (
		<>
			<div style={{ display: "flex", width: "20%" }}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						padding: "10px",
					}}
				>
					<div style={{ fontSize: "20px" }}>HTML</div>
					<div style={{ fontSize: "20px" }}>CSS</div>
					<div style={{ fontSize: "20px" }}>JavaScript</div>
					<div style={{ fontSize: "20px" }}>React</div>
				</div>
			</div>
		</>
	);
}

export default LeftMenu;
