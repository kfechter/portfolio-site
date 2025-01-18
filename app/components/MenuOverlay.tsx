import NavLink from "./NavLink"
import { Props } from "./NavLink"

export default function MenuOverlay({overlayLinks}: {overlayLinks: Props[]}) {
    return (
           <ul className="flex flex-col py-4 items-center">
                {overlayLinks.map((item, index) => (
                        <li key={index}><NavLink href={item.href} title={item.title} /></li>
                ))}
           </ul>
      )
}