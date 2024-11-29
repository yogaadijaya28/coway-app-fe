import React from 'react'
import Head from 'next/head'
import dynamic from "next/dynamic";
import { NextPage } from 'next';

const PageHomeContainer = dynamic(() => import('containers/PageHomeContainer'), {
    ssr: false,
});

const Index: NextPage = () => {

    return (
        <>
            <Head>
                <title>Coway</title>
            </Head>
            <PageHomeContainer />
        </>
    )
}

export default Index
