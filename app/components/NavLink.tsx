import Link from "next/link"

export interface Props {
    href: string,
    title: string
}

export interface PropsList {
    links: Props[]
}

export default function NavLink(props: Props) {
    return (
        <Link href={props.href} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">{props.title}</Link>
    )
}