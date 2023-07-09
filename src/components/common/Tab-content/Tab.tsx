import React from 'react'

type Props = {
  title: string;
  children: React.ReactNode;
  titleClassName:string
}

const Tab: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default Tab