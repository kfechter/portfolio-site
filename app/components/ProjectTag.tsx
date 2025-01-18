
export default function ProjectTag({name, onClick, isSelected}: {name: string, onClick: any, isSelected: boolean}) {
    const buttonStyles = isSelected 
    ? "text-white border-red-500" : "text[#ADB7BE] border-slate-600 hover:border-white"
  
    return (
        <button onClick={() => onClick(name)} className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}>
            {name}
        </button>
    )
}
