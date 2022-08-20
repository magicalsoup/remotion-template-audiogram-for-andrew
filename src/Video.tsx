import { Composition } from 'remotion';
import { AudiogramComposition } from './Composition';
import './style.css';

const fps = 30;
const durationInFrames = 30 * fps;

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Audiogram"
				component={AudiogramComposition}
				durationInFrames={durationInFrames}
				fps={fps}
				width={1080}
				height={1920}
			/>
		</>
	);
};
