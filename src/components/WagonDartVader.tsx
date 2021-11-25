import * as React from 'react';
import { styled } from '@mui/material/styles';

const Vader = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'inline-block',
  transform: 'translate(-50%, -50%)',

	'&:hover': {
		'.left-eye': {
			background: '#d81f27 !important',
		},
		'.right-eye': {
			background: '#455caa',
		}
	}
})
const VaderHead = styled('div')({
  position: 'relative',
  width: '100px',
  height: '100px',
  marginBottom: '-10px',
  zIndex: 1,
})
const VaderHelmet = styled('div')({
	position: 'absolute',
	top: 0,
	left: '5px',
	width: '90px',
	height: '80px',
	background: '#222222',
	borderRadius: '80px 80px 0 0',

	'&::before': {
		content: "''",
		display: 'inline-block',
		position: 'absolute',
		top: 0,
		left: '50%',
		width: '50px',
		height: '8px',
		marginLeft: '-25px',
		background: '#040507',
		borderRadius: '25px 25px 0 0 / 8px 8px 0 0',
	},

	'&::after': {
		content: "''",
		display: 'inline-block',
		position: 'absolute',
		top: '8px',
		left: '50%',
		marginLeft: '-25px',
		height: 0,
		width: 0,
		borderLeft: '25px solid transparent',
		borderRight: '25px solid transparent',
		borderTop: '24px solid #040507',
	}
})
const VaderHelmetLeft = styled('span')({
	position: 'absolute',
	top: '50%',
	width: '35px',
	height: '55px',
	background: '#040507',
	left: '-6px',
	transform: 'rotate(25deg)',

	'&::before': {
		content: "''",
		position: 'absolute',
		top: '-5px',
		width: '8px',
		height: '55px',
		background: '#222222',
		left: 0,
	}
})
const VaderHelmetRight = styled('span')({
	position: 'absolute',
	top: '50%',
	width: '35px',
	height: '55px',
	background: '#040507',
	right: '-6px',
	transform: 'rotate(-25deg)',

	'&::before': {
		content: "''",
		position: 'absolute',
		top: '-5px',
		width: '8px',
		height: '55px',
		background: '#222222',
		right: 0,
	}
})
const VaderEyes = styled('div')({
  position: 'absolute',
  top: '35px',
  left: '10px',
  width: '80px',
  height: '40px',
  borderRadius: '40px',
  background: '#343434',

	'&::before': {
		content: "''",
		display: 'inline-block',
		position: 'absolute',
		top: '33px',
		left: '5px',
		height: 0,
		width: 0,
		borderLeft: '35px solid transparent',
		borderRight: '35px solid transparent',
		borderTop: '30px solid #343434',
	}
})
const VaderEyesLeft = styled('span')({
  position: 'absolute',
  top: '5px',
  width: '30px',
  height: '30px',
  borderRadius: '30px',
  background: '#010000',
  transition: 'background 0.3s ease-in-out',
  left: '7px',
})
const VaderEyesRight = styled('span')({
  position: 'absolute',
  top: '5px',
  width: '30px',
  height: '30px',
  borderRadius: '30px',
  background: '#010000',
  transition: 'background 0.3s ease-in-out',
  right: '7px',
})
const VaderGrill = styled('span')({
	position: 'absolute',
	bottom: '20px',
	left: '50%',
	width: '20px',
	marginLeft: '-10px',
})
const VaderGrillLeft = styled('span')({
	position: 'absolute',
	bottom: '-5px',
	width: '2px',
	marginLeft: '-1px',
	background: '#c6c6c6',
  left: '4px',
  height: '10px',
})
const VaderGrillCenter = styled('span')({
	position: 'absolute',
	bottom: '-5px',
	width: '2px',
	marginLeft: '-1px',
	background: '#c6c6c6',
  left: '50%',
  height: '17px',
})
const VaderGrillRight = styled('span')({
	position: 'absolute',
	bottom: '-5px',
	width: '2px',
	marginLeft: '-1px',
	background: '#c6c6c6',
  right: '2px',
  height: '10px',
})
const VaderMask = styled('span')({
  position: 'absolute',
  bottom: '19px',
  left: '50%',
})
const VaderMaskTop = styled('span')({
  position: 'absolute',
  top: 0,
  width: '4px',
  height: '4px',
  borderRadius: '1px',
  background: '#c6c6c6',
	left: '50%',
	marginTop: '-16px',
	marginLeft: '-2px',

	'&::before': {
		content: "''",
		display: 'inline-block',
		position: 'absolute',
		left: '-7px',
		top: '-2px',
		width: '4px',
		height: '24px',
		background: '#040507',
		borderRadius: '4px',
		transform: 'rotate(40deg)',
	},

	'&::after': {
		content: "''",
		display: 'inline-block',
		position: 'absolute',
		right: '-7px',
		top: '-2px',
		width: '4px',
		height: '24px',
		background: '#040507',
		borderRadius: '4px',
		transform: 'rotate(-40deg)',
	}
})
const VaderMaskLeft = styled('span')({
  position: 'absolute',
  top: 0,
  width: '4px',
  height: '4px',
  borderRadius: '1px',
  background: '#c6c6c6',
	left: '12px',
})
const VaderMaskCenter = styled('span')({
	position: 'absolute',
	top: 0,
	width: '4px',
	height: '4px',
	borderRadius: '1px',
	background: '#c6c6c6',
	left: '50%',
	marginTop: '-16px',
	marginLeft: '-2px',
})
const VaderMaskRight = styled('span')({
	position: 'absolute',
	top: 0,
	width: '4px',
	height: '4px',
	borderRadius: '1px',
	background: '#c6c6c6',
  right: '12px',
})
const VaderLine = styled('span')({
  position: 'absolute',
  top: '-3px',
  left: '50%',
  width: '6px',
  height: '38px',
  marginLeft: '-3px',
  background: '#343434',

	'&::before': {
		content: "''",
		display: 'inline-block',
		position: 'absolute',
		left: '-4px',
		bottom: 0,
		width: '4px',
		height: '12px',
		background: '#040507',
	},

	'&::after': {
		content: "''",
		display: 'inline-block',
		position: 'absolute',
		right: '-4px',
		bottom: 0,
		width: '4px',
		height: '12px',
		background: '#040507',
	}
})
const VaderTorso = styled('div')({
	position: 'relative',
	width: '60px',
	height: '80px',
	borderRadius: '50px 50px 0 0',
	margin: '0 auto',
	background: '#222222',

	'&::before': {
		content: "''",
		display: 'inline-block',
		position: 'absolute',
		left: '-20px',
		top: '-15px',
		width: '100px',
		height: '115px',
		borderRadius: '50px 50px 0 0',
		margin: '0 auto',
		background: '#040507',
		zIndex: '-1',
	}
})
const VaderTorsoNeck = styled('span')({
	position: 'absolute',
	left: '6px',
	top: '3px',
	width: '48px',
	height: '8px',
	background: '#010000',
	zIndex: 5,

	'&::before': {
		content: "''",
		position: 'absolute',
		top: '-8px',
		left: '8px',
		width: '32px',
		height: '10px',
		background: '#222222',
		borderRadius: '0 0 4px 4px',
	},

	'&::after': {
		content: "''",
		position: 'absolute',
		top: '-8px',
		left: '8px',
		width: '32px',
		height: '1px',
		background: '#666666',
	}
})
const VaderTorsoNeckLeft = styled('span')({
	position: 'absolute',
	top: 0,
	width: '6px',
	height: '125%',
	marginLeft: '-3px',
	background: '#434343',
	left: '6px',
	transform: 'rotate(30deg)',
	borderRadius: '5px 0 0 0',
})
const VaderTorsoNeckCenter = styled('span')({
	position: 'absolute',
	width: '6px',
	height: '125%',
	marginLeft: '-3px',
	background: '#434343',
	left: '50%',
	top: '2px',
})
const VaderTorsoNeckRight = styled('span')({
	position: 'absolute',
	top: 0,
	width: '6px',
	height: '125%',
	marginLeft: '-3px',
	background: '#434343',
	right: '3px',
	transform: 'rotate(-30deg)',
	borderRadius: '0 5px 0 0',
})
const VaderTorsoNeckBottom = styled('span')({
	position: 'absolute',
	top: '8px',
	marginLeft: '-3px',
  left: '4px',
  width: '46px',
  height: '5px',
  background: '#222222',
})
const VaderTorsoBelt = styled('span')({
	position: 'absolute',
	bottom: 0,
	width: '100%',
	height: '10px',
	background: '#040507',
})
const VaderTorsoBeltCenter = styled('span')({
	'&::before': {
		content: "''",
		position: 'absolute',
		top: 0,
		left: '50%',
		width: '20px',
		height: '10px',
		borderRadius: '10px',
		marginLeft: '-10px',
		background: '#c6c6c6',
	}
})
const VaderTorsoPlate = styled('div')({
  position: 'absolute',
  left: '15px',
  top: '25px',
  width: '30px',
  height: '32px',
  background: '#343434',
})
const VaderTorsoPlateRedTop = styled('span')({
	position: 'absolute',
	left: '2px',
	top: '2px',
	width: '12px',
	height: '18px',
	background: '#d81f27',

	'&::before': {
		content: "''",
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '5px',
		background: 'rgba(0, 0, 0, 0.2)',
	},

	'&::after': {
		content: "''",
		position: 'absolute',
		bottom: '5px',
		left: 0,
		width: '100%',
		height: '2px',
		background: '#343434',
	}
})
const VaderTorsoPlateRedCenter = styled('span')({
	position: 'absolute',
	right: '2px',
	top: '12px',
	width: '12px',
	height: '8px',
	background: '#d81f27',

	'&::before': {
		content: "''",
		position: 'absolute',
		top: '4px',
		left: 0,
		width: '100%',
		height: '4px',
		background: 'rgba(0, 0, 0, 0.2)',
	},

	'&::after': {
		content: "''",
		position: 'absolute',
		top: 0,
		left: '5px',
		width: '2px',
		height: '100%',
		background: '#343434',
	}
})
const VaderTorsoPlateRedBottom = styled('span')({
	position: 'absolute',
	right: '2px',
	bottom: '2px',
	width: '4px',
	height: '8px',
	background: '#d81f27',
})
const VaderTorsoPlateBlue = styled('span')({
	position: 'absolute',
	right: '2px',
	top: '2px',
	width: '12px',
	height: '8px',
	background: '#455caa',

	'&::before': {
		content: "''",
		position: 'absolute',
		top: '3px',
		left: 0,
		width: '100%',
		height: '2px',
		background: '#343434',
	},
})
const VaderTorsoPlateGray = styled('span')({
	position: 'absolute',
	left: '2px',
	bottom: '2px',
	width: '20px',
	height: '8px',
	background: '#9f9fa1',

	'&::before': {
		content: "''",
		position: 'absolute',
		top: 0,
		left: '5px',
		width: '2px',
		height: '100%',
		background: '#343434',
	},

	'&::after': {
		content: "''",
		position: 'absolute',
		top: 0,
		right: 0,
		width: '8px',
		height: '100%',
		background: 'rgba(0, 0, 0, 0.2)',
	}
})
const VaderArmLeft = styled('div')({
	position: 'absolute',
	top: '82%',
	left: '-2px',
	zIndex: 2,
})
const VaderArmRight = styled('div')({
	position: 'absolute',
	top: '60%',
	right: '-20px',
	zIndex: 2,
	animation: 'animation-hand-right 1.5s linear infinite',

	'@keyframes animation-hand-right': {
		'0%': {
			transform: 'rotate(0deg)',
		},
		'100%': {
			transform: 'rotate(360deg)',
		}
	}
})
const VaderHandLeft = styled('span')({
  position: 'absolute',
  top: 0,
  width: '11px',
  height: '22px',
  marginTop: '-12px',
  marginLeft: '-12px',
  background: '#040507',
	left: 0,
  borderRadius: '22px 0 0 22px',
})
const VaderHandRight = styled('span')({
	position: 'absolute',
	top: 0,
	height: '22px',
	marginTop: '-12px',
	marginLeft: '-12px',
	background: '#040507',
	right: 0,
	width: '22px',
	borderRadius: '22px',
})
const VaderLegs = styled('div')({
	position: 'relative',
	width: '50px',
	height: '20px',
	margin: '0 auto',
	background: '#222222',

	'&::before': {
		content: "''",
		position: 'absolute',
		bottom: 0,
		left: '50%',
		width: '20px',
		height: '100%',
		marginLeft: '-10px',
		background: '#040507',
	}
})
const VaderBoots = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: '50%',
})
const VaderBootsLeft = styled('span')({
  content: "''",
  display: 'inline-block',
  position: 'absolute',
  top: 0,
	left: '10px',
  width: '30px',
  height: '10px',
  background: '#040507',
	borderRadius: '0 15px 0 0',
})
const VaderBootsRight = styled('span')({
  content: "''",
  display: 'inline-block',
  position: 'absolute',
  top: 0,
	right: '10px',
  width: '30px',
  height: '10px',
  background: '#040507',
  borderRadius: '15px 0 0 0',
})
const VaderSword = styled('div')({
	position: 'absolute',
	top: '50%',
	left: '-20px',
	zIndex: 10,
	animation: 'animation-hand-left 3s ease-in-out infinite',

	'@keyframes animation-hand-left': {
		'0%, 100%': {
			transform: 'translateX(0) rotate(-25deg)',
		},
		'50%': {
			transform: 'translateX(150px) rotate(25deg)',
		},
	}
})
const VaderSwordHandle = styled('span')({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '6px',
	height: '30px',
	marginLeft: '-3px',
	background: '#343434',

	'&::before': {
		content: "''",
		position: 'absolute',
		left: 0,
		top: '5px',
		width: '100%',
		height: '5px',
		background: '#888888',
	},

	'&::after': {
		content: "''",
		position: 'absolute',
		right: '4px',
		top: '5px',
		width: '4px',
		height: '5px',
		background: '#343434',
	}
})
const VaderSwordLight = styled('span')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '20px',
  height: '120px',
  marginLeft: '-10px',
	background: `linear-gradient(
		90deg,
		rgba(248,80,50,0) 10%,
		rgba(247,67,37,0) 20%,
		rgba(246,41,12,.67) 40%,
		#ffb0a6 50%,
		rgba(246,41,12,.67) 60%
		,rgba(236,51,30,0) 80%
		,rgba(231,56,39,0) 90%
	);`,

	'&::before': {
		content: "''",
		position: 'absolute',
		bottom: 0,
		left: '50%',
		width: '3px',
		height: '120px',
		marginLeft: '-1px',
		background: 'rgba(248, 80, 50, 1)',
		zIndex: '-1',
	},
})
const Shadow = styled('div')({
  position: 'absolute',
  bottom: '-17px',
  left: '-25px',
  display: 'block',
  width: '150px',
  height: '14px',
  background: 'rgba(0, 0, 0, 0.15)',
  borderRadius: '50%',
})

export default function WagonAppBar() {
	return (
		<Vader>
			<Shadow />
			<VaderHead>
				<VaderHelmet>
					<VaderHelmetLeft />
					<VaderHelmetRight />
				</VaderHelmet>
				<VaderEyes>
					<VaderEyesLeft className="left-eye" />
					<VaderEyesRight className="right-eye" />
				</VaderEyes>
				<VaderGrill>
					<VaderGrillLeft />
					<VaderGrillCenter />
					<VaderGrillRight />
				</VaderGrill>
				<VaderMask>
					<VaderMaskTop />
					<VaderMaskLeft />
					<VaderMaskCenter />
					<VaderMaskRight />
				</VaderMask>
				<VaderLine />
			</VaderHead>
			<VaderTorso>
				<VaderTorsoNeck>
					<VaderTorsoNeckLeft />
					<VaderTorsoNeckCenter />
					<VaderTorsoNeckRight />
					<VaderTorsoNeckBottom />
				</VaderTorsoNeck>
				<VaderTorsoBelt>
					<VaderTorsoBeltCenter />
				</VaderTorsoBelt>
				<VaderTorsoPlate>
					<VaderTorsoPlateRedTop />
					<VaderTorsoPlateRedCenter />
					<VaderTorsoPlateRedBottom />
					<VaderTorsoPlateBlue />
					<VaderTorsoPlateGray />
				</VaderTorsoPlate>
			</VaderTorso>
			<VaderArmLeft>
				<VaderHandLeft />
			</VaderArmLeft>
			<VaderArmRight>
				<VaderHandRight />
			</VaderArmRight>
			<VaderLegs />
			<VaderBoots>
				<VaderBootsLeft />
				<VaderBootsRight />
			</VaderBoots>
			<VaderSword>
				<VaderSwordHandle />
				<VaderSwordLight />
			</VaderSword>
		</Vader>
	);
}
