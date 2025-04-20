import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase/client';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState();
	const [profileImage, setProfileImage] = useState();

	useEffect(() => {
		const checkLogin = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();

			if (user) {
				const data = await supabase
					.from('user_info')
					.select('*')
					.eq('email', user.email);

				// 로그인이 되었을 때에만 실행
				setEmail(user.email);
				setProfileImage(user.identities[0].identity_data.avatar_url);
			} else {
				// 로그인 페이지로 보내기
				alert('마이페이지 접근에는 로그인이 필요합니다.');
				navigate('/signup');
			}
		};
		checkLogin();
	}, [navigate]);

	const onLogoutButtonClick = async () => {
		await supabase.auth.signOut();
		alert('성공적으로 로그아웃되었습니다.');
		navigate('/');
	};

	return (
		<div>
			<img src={profileImage} alt={email} />
			<h3>{email}</h3>
			<button style={{ cursor: 'pointer' }} onClick={onLogoutButtonClick}>
				로그아웃
			</button>
		</div>
	);
};

export default MyPage;
