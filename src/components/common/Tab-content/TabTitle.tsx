import React from "react"

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
  className?: string
  active:string
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index,className,active }) => {
    // const handleClickActive = (e: any) => {
    //     console.log(e.title);
    //   };
    
  return (
    
    <li className={active}>
      <button className={className} onClick={() => setSelectedTab(index)}>{title}</button>
    </li>
  )
}



export default TabTitle