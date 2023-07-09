import Head from 'next/head';
import { MyPage } from '@/components/layouts/types';
import Icon from '@/components/common/icons/icomoon';

const Guide: MyPage = () => {
	return (
	<> 
	<Head>
		<title>Cofeapp | Guide</title>
	</Head>
    <main
      className={`-flex -min-h-screen -flex-col -items-center -justify-between`}
    >
		<h2>Guide</h2>
        <Icon icon="icon-facebook" />
	 </main>
</>
	);
};
export default Guide;
Guide.Layout = "Default";