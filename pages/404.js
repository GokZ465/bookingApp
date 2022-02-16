import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 15000)
    },)

    return (
        <div className="not-found">
            <h1>404</h1>
            <Link href="/">←</Link>
        </div>
    );
}

export default NotFound;