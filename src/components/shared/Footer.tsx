import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-gray-400 drak:border-gray-200 border-t py-8 ">
            <div className="flex justify-center items-center">
                <div className="pt-1">
                    Copyright &copy; {year}{" "}
                </div>
                <div className="w-48 ">
						<Link href="/">
							<Image
								src="/img/logo.png"
								width={150}
								height={10}
								alt="logo"
								className="w-[100px] md:w-auto"
							/>
						</Link>
					</div>
            </div>
        </footer>
    );
}
