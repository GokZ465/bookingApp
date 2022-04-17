import Head from 'next/head'
import Form from './form'

export default function Login() {

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <header>
                header
            </header>

            <div className='login-page'>
                <aside className='form-side'>
                    <h5>title</h5>
                    <p>text</p>
                    <a>link</a>
                </aside>
                <Form />
            </div>
        </>
    )
}