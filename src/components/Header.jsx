import React from "react";

function Header(props) {
	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div className="font" style={{ display: "flex" }}>
					Joseph Site
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<label style={{ fontSize: "20px" }}> 폰트 변경 : </label>
					<select
						id="select"
						style={{ fontSize: "20px", margin: "20px" }}
						onChange={props.onChange}
					>
						<option value="JalnanOTF00">JalnanOTF00</option>
						<option value="NanumBrush">NanumBrush</option>
						<option value="godoMaum">godoMaum</option>
					</select>
				</div>
			</div>
		</>
	);
}

export default Header;
