export interface NewDefaultTheme {
	team: { 
		colors: {
			primary: string
		}
	},
	colors: {
		black: "#202020";
		white: "#FFFFFF";
		gray: {
			"800": "#4E545C";
			"600": "#6B7786";
			"500": "#808080";
			"400": "#9D9D9D";
			"200": "#C7CDD6";
			"100": "#DCDCDD";
		},
		blue: {
			"900": "#010834";
			"600": "#122288";
			"500": "#06357A";
		},
		green: {
			"700": "#96AA00";
			"500": "#009628";
			"300": "#CEEA00";
		},
		orange: {
			"600": "#E25700";
		},
    yellow: {
      "500": "#FFBB11"
    }
	},
	fontSize: {
		smXX: "8px";
		smX: "10px";
		sm: "12px";
		md: "14px";
		base: "16px";
		lg: "18px";
		xl: "20px";
		xll: "24px";
		xxl: "32px";
	},
	media: {
		mobile: "30rem",
		tablet: "48rem",
		desktop: "64rem"
	}
}

export const theme: NewDefaultTheme = {
	team: {
		colors: {
			primary: "#009628"
		}
	},
	colors: {
		black: "#202020",
		white: "#FFFFFF",
		gray: {
			"800": "#4E545C",
			"600": "#6B7786",
			"500": "#808080",
			"400": "#9D9D9D",
			"200": "#C7CDD6",
			"100": "#DCDCDD",
		},
		blue: {
			"900": "#010834",
			"600": "#122288",
			"500": "#06357A"
		},
		green: {
			"700": "#96AA00",
			"500": "#009628",
			"300": "#CEEA00"
		},
		orange: {
			"600": "#E25700",
		},
    yellow: {
      "500": "#FFBB11"
    }
	},
	fontSize: {
		smXX: "8px",
		smX: "10px",
		sm: "12px",
		md: "14px",
		base: "16px",
		lg: "18px",
		xl: "20px",
		xll: "24px",
		xxl: "32px"
	},
	media: {
		mobile: "30rem",
		tablet: "48rem",
		desktop: "64rem"
	}
};