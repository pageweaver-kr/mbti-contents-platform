import React from 'react';
import { supabase } from '../supabase/client';
import googleButton from '../assets/web_light_sq_SU.svg';

const SignUp = () => {
	const handleSocialLogin = async () => {
		await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo:
					import.meta.env.MODE === 'development'
						? 'http://localhost:5173/authCallback'
						: 'https://mbit.jadepost.net/authcallback',
				queryParams: {
					access_type: 'offline',
					prompt: 'consent',
				},
			},
		});
	};
	return (
		<div>
			<h1>소셜로그인</h1>
			<h3>간편하게 로그인해보세요</h3>
			<div>
				<img
					style={{
						cursor: 'pointer',
						display: 'block',
						width: '10rem',
						margin: '0 auto',
					}}
					src={googleButton}
					alt={'google login'}
				/>
				<button
					onClick={handleSocialLogin}
					style={{ cursor: 'pointer', width: '10rem', height: '3rem' }}
				>
					구글 로그인
				</button>
			</div>
		</div>
	);
};

export default SignUp;
