import React, { ReactElement, useState } from "react"
import TabTitle from "./TabTitle"

type Props = {
  children: ReactElement[]
  className?: string
}

const Tabs: React.FC<Props> = ({ children,className }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  console.log(selectedTab);
  return (
    <>
    <div className="custom-tab">
      <ul className={className}>  
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            active={selectedTab == index ? "active" : ""}
            className={item.props.titleClassName}
            setSelectedTab={setSelectedTab}
          />
          
        ))}
      </ul>
      {children[selectedTab]}
    </div>
    </>
  )
}

export default Tabs