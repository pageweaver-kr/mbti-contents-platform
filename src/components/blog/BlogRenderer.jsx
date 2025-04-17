import { Divider } from 'antd';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { eventSenderGA } from '../../tools/tools';

const BlogRenderer = ({ content }) => {
	const onTestThumbnailClick = () => {
		eventSenderGA('Paging', 'Click Blog Bottom Test Thumbnail', 'Blog');
	};
	return (
		<div>
			<h1>{content?.title}</h1>
			<div style={{ textAlign: 'left', lineHeight: '1.6rem' }}>
				<ReactMarkdown>{content?.texts}</ReactMarkdown>
			</div>
			<Divider />
			<h3>관련된 테스트를 만나보세요!</h3>
			<Link to={`/${content?.testUrl}`}>
				<img
					style={{ width: '100%' }}
					src={`https://images.mbti.jadepost.net/thumbnail/${content?.testUrl}-thumb.avif`}
					alt={`${content?.testUrl}`}
				/>
			</Link>
		</div>
	);
};

export default BlogRenderer;
