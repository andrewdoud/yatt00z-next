import dynamic from "next/dynamic";
import Image from 'next/image';
import { Button } from "./ui/button";

const Star = dynamic(
    () => import("./components/Star"),
    { ssr: false } // <-- not including this component on server-side
)

export default function Home() {
    return (
        <main className="relative h-screen w-screen justify-center align-">
            <div className="menu-wrapper noise-bg">
                {/* welcome to yatt00z site */}
                {/* <Button>yatt00z</Button> */}
                <button className="logo">
                <Image
                    className="noise"
                    src="/yatt00z-logo.svg"
                    alt="yatt00z Logo"
                    width={240}
                    height={144}
                    priority
                />
                </button>
                {/* <button className="menu-button">yatt00z</button> */}
                <button className="menu-button">tattoos</button>
                <button className="menu-button">art</button>
                <button className="menu-button">booking</button>
            </div>
            <div className="fixed h-screen max-w-fit blur-lg z-0">
                <Star s={0.6} />
            </div>
        </main>
    );
}
