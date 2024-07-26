import React from "react"
import "../../style/contact-us/Our-address.css"

function OurAddress() {
	return (
		<>
			<div className="our-address-contact-us">
				{/* main address */}
				<div className="main-address-bottom-side">
					<h2>Our Address:</h2>
					<h5 className="main-address-upper-side-paregraph">
						SABURI TEA ESTATE PVT.LTD. W 18, Okhla Industrial Area, Phase - II
						New Delhi, 110020 (BHARAT)
					</h5>
				</div>
				{/* mail */}
				<div className="main-address-bottom-side">
					<h2>Mail us at:</h2>
					<h5 className="main-address-upper-side-paregraph">
						info@saburitea.com
					</h5>
				</div>{" "}
				<div className="main-address-bottom-side customer-care">
					<h2>Customer Care:</h2>
					<h5 className="main-address-upper-side-paregraph">+91 9990524000</h5>
				</div>
			</div>
		</>
	)
}

export default OurAddress
