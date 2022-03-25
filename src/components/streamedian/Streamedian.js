import React from 'react';
import StreamedianPlayer from './StreamedianPlayer';
import './streamedian.css';

const Home = ({url, id}) => (
	<div>
		<StreamedianPlayer id={id} >
			{ <source  src={url} type="application/x-rtsp" /> }
		</StreamedianPlayer>
	</div>
);

export default Home;
