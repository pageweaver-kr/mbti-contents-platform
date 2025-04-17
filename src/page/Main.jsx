import LanguageIcons from '../components/main/LanguageIcons';
import MainBanner from '../components/main/MainBanner';
import CategoryButtons from '../components/main/CategoryButtons';
import ThumbnailList from '../components/main/ThumbnailList';
import MainMetatagRenderer from '../components/metatagRenderer/IntroMetaTagRenderer';

function Main() {
	return (
		<div>
			<MainMetatagRenderer />
			<LanguageIcons />
			<MainBanner />
			<CategoryButtons />
			<ThumbnailList />
		</div>
	);
}

export default Main;
