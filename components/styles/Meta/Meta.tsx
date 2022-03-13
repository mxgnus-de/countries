import { themeColor } from 'config/meta';
import Head from 'next/head';
import { Meta as IMeta } from 'types/Meta';

function Meta({ meta }: { meta: IMeta }) {
   return (
      <Head>
         <title>{meta.title}</title>
         <meta name='description' content={meta.description} />
         <meta property='og:title' content={meta.title} />
         <meta property='og:description' content={meta.description} />
         <>
            <meta name='twitter:card' content='summary_large_image'></meta>
            <meta name='theme-color' content={themeColor} />
         </>
      </Head>
   );
}
export default Meta;
