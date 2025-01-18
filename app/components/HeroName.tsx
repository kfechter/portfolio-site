export interface NameProps {
  name: string
}

export default function HeroName({nameProps}: {nameProps: NameProps}) {
  return <span>{nameProps.name}</span>
}