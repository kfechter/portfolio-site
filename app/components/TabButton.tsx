import { ReactNode } from "react"

export default function TabButton({active, selectTab, children} : {active: boolean, selectTab: any, children: ReactNode })
{
    const buttonClasses = active ? 'text-white border-b border-red-500' : 'text-[#ADB7BE]'

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}