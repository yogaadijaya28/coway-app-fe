import 'asset/css/main.css'
import 'asset/css/custom.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from 'next/app'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppLayout from '@/containers/Layouts/AppLayout'
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnMount: false,
                refetchOnWindowFocus: false,
                retry: false,
            }
        }
    }))


    return (
        <>
            <QueryClientProvider client={queryClient}>



                <ReactQueryDevtools initialIsOpen={false} />

                <AppLayout>
                    <Component {...pageProps} />
                </AppLayout>




            </QueryClientProvider>
        </>
    );
}