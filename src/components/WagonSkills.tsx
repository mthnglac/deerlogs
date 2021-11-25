import * as React from 'react';
import { styled } from '@mui/material/styles';

const Skills = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignSelf: 'center',
})
const Container = styled('div')({
	margin: '1em 0',
	positon: 'relative',
	width: '22.5em',
})
const Title = styled('h3')({
	color: '#ffffff',
	fontWeight: 300,
	fontSize: '0.8em',
	letterSpacing: '0.145em',
	textTransform: 'uppercase',
	width: '10em',
})
const OuterBar = styled('div')({
	marginTop: '1em',
	background: '#333333',
	height: '0.75em',
})
const InnerBarPython = styled('div')({
	width: '90%',
  background: '#08475f',
  height: '0.75em',
  transform: 'scaleX(0)',
  transformOrigin: '0 0',
	animation: 'fill-bar 1s forwards',

	'@keyframes fill-bar': {
		'to': {
			transform: 'scaleX(1)',
		}
	}
})
const InnerBarDjango = styled('div')({
	width: '90%',
  background: '#13583e',
  height: '0.75em',
  transform: 'scaleX(0)',
  transformOrigin: '0 0',
	animation: 'fill-bar 1s forwards',

	'@keyframes fill-bar': {
		'to': {
			transform: 'scaleX(1)',
		}
	}
})
const InnerBarJavascript = styled('div')({
	width: '95%',
  background: '#ecd51d',
  height: '0.75em',
  transform: 'scaleX(0)',
  transformOrigin: '0 0',
	animation: 'fill-bar 1s forwards',

	'@keyframes fill-bar': {
		'to': {
			transform: 'scaleX(1)',
		}
	}
})
const InnerBarVueJS = styled('div')({
	width: '80%',
  background: '#e68524',
  height: '0.75em',
  transform: 'scaleX(0)',
  transformOrigin: '0 0',
	animation: 'fill-bar 1s forwards',

	'@keyframes fill-bar': {
		'to': {
			transform: 'scaleX(1)',
		}
	}
})
const InnerBarReactJS = styled('div')({
	width: '85%',
  background: '#e24b3e',
  height: '0.75em',
  transform: 'scaleX(0)',
  transformOrigin: '0 0',
	animation: 'fill-bar 1s forwards',

	'@keyframes fill-bar': {
		'to': {
			transform: 'scaleX(1)',
		}
	}
})

export default function WagonAppBar() {
	return (
		<Skills>
			<Container>
				<Title>Python</Title>
				<OuterBar>
					<InnerBarPython />
				</OuterBar>
			</Container>
			<Container>
				<Title>Django</Title>
				<OuterBar>
					<InnerBarDjango />
				</OuterBar>
			</Container>
			<Container>
				<Title>Javascript</Title>
				<OuterBar>
					<InnerBarJavascript />
				</OuterBar>
			</Container>
			<Container>
				<Title>VueJS</Title>
				<OuterBar>
					<InnerBarVueJS />
				</OuterBar>
			</Container>
			<Container>
				<Title>ReactJS</Title>
				<OuterBar>
					<InnerBarReactJS />
				</OuterBar>
			</Container>
		</Skills>
	);
}
