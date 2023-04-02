import React from "react";

export const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
    <div className='wrapper'>
      {children}
    </div>
	)
}