import dynamic from "next/dynamic";
const ClientComponent = dynamic(() => import('./some-component'), {ssr: false})

export default function Page() {
    return (
        <>
        <h2>React</h2>
        <ClientComponent/>
        </>
    );
}