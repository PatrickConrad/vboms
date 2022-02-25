import Head from 'next/head';

const Meta = ({title, keywords, description, extras}) => {
    return(
        <Head>
            <meta name="viewport" content='width=device-width,initial-scale=1'/>
            <meta name="keywords" content={keywords}/>
            <meta name="description" content={description}/>
            <meta charSet="utf-8" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Vboms App',
    keywords: 'Virtual Business Operations Management Systems',
    description: 'Virtual Business Operations Management Systems a technology company developing better ways for small and large business to run',
}

export default Meta 