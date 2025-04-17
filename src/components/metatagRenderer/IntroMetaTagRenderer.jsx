import React from 'react';
import { Helmet } from 'react-helmet';
import { base_url } from '../../App';
import { useSearchParams } from 'react-router-dom';

const MainMetatagRenderer = () => {
	const [searchParams] = useSearchParams();
	const language = searchParams.get('lang') || 'Kor';
	if (language === 'Kor') {
		return (
			<Helmet>
				{/* <!-- Primary Meta Tags --> */}
				<title>MBTI 콘텐츠 플랫폼</title>
				<meta name='title' content='MBTI 콘텐츠 플랫폼' />
				<meta
					name='description'
					content='다양한 MBTI 테스트를 할 수 있는 놀이터'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='canonical' href={base_url} />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content={base_url} />
				<meta property='og:title' content='MBTI 콘텐츠 플랫폼' />
				<meta
					property='og:description'
					content='다양한 MBTI 테스트를 할 수 있는 놀이터'
				/>
				<meta
					property='og:image'
					content='https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1'
				/>

				{/* <!-- Twitter --> */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content={base_url} />
				<meta property='twitter:title' content='MBTI 콘텐츠 플랫폼' />
				<meta
					property='twitter:description'
					content='다양한 MBTI 테스트를 할 수 있는 놀이터'
				/>
				<meta
					property='twitter:image'
					content='https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1'
				/>
			</Helmet>
		);
	} else if (language === 'JP') {
		return (
			<Helmet>
				{/* <!-- Primary Meta Tags --> */}
				<title>MBTI 콘텐츠 플랫폼</title>
				<meta name='title' content='MBTI 콘텐츠 플랫폼' />
				<meta
					name='description'
					content='다양한 MBTI 테스트를 할 수 있는 놀이터'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='canonical' href={base_url} />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content={base_url} />
				<meta property='og:title' content='MBTI 콘텐츠 플랫폼' />
				<meta
					property='og:description'
					content='다양한 MBTI 테스트를 할 수 있는 놀이터'
				/>
				<meta
					property='og:image'
					content='https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1'
				/>

				{/* <!-- Twitter --> */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content={base_url} />
				<meta property='twitter:title' content='MBTI 콘텐츠 플랫폼' />
				<meta
					property='twitter:description'
					content='다양한 MBTI 테스트를 할 수 있는 놀이터'
				/>
				<meta
					property='twitter:image'
					content='https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1'
				/>
			</Helmet>
		);
	} else {
		return (
			<Helmet>
				{/* <!-- Primary Meta Tags --> */}
				<title>MBTI CONTENTS PLATFORM</title>
				<meta name='title' content='MBTI CONTENTS PLATFORM' />
				<meta
					name='description'
					content='다양한 MBTI 테스트를 할 수 있는 놀이터'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='canonical' href={base_url + '/?lang=Eng'} />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content={base_url + '/?lang=Eng'} />
				<meta property='og:title' content='MBTI CONTENTS PLATFORM' />
				<meta
					property='og:description'
					content='다양한 MBTI 테스트를 할 수 있는 놀이터'
				/>
				<meta
					property='og:image'
					content='https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1'
				/>

				{/* <!-- Twitter --> */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content={base_url + '?lang=Eng'} />
				<meta property='twitter:title' content='MBTI CONTENTS PLATFORM' />
				<meta
					property='twitter:description'
					content='다양한 MBTI 테스트를 할 수 있는 놀이터'
				/>
				<meta
					property='twitter:image'
					content='https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1'
				/>
			</Helmet>
		);
	}
};

export default MainMetatagRenderer;
