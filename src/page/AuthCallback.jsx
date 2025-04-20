import React, { useEffect } from 'react';
import { supabase } from '../supabase/client';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const checkLogin = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();

			if (user && user.email) {
				// 우리의 User 테이블에 그 유저 정보를 새로 만들어서 넣기
				const { data } = await supabase
					.from('user_info')
					.select('uid')
					.eq('email', user.email);

				if (data.length === 0) {
					// 우리의 user_info 테이블에 값 넣기
					const new_user_info = {
						email: user.email,
						uid: user.id,
					};
					await supabase.from('user_info').upsert(new_user_info);
					// 마이페이지로 보내기
					navigate('/mypage');
				}
				// 마이 페이지로 보내기
				navigate('/mypage');
			} else {
				// 다시 로그인 페이지로 보내기
				navigate('/signup');
			}
		};
		checkLogin();
	}, [navigate]);
	return <div></div>;
};

export default AuthCallback;
