import React from 'react'

interface Props {
    className?: string;
}

const Container: React.FC<React.PropsWithChildren<Props>> =({ children, className }: React.PropsWithChildren<Props>) => {
    return (
        <div className={`px-4 md:px-20 w-full mx-auto ${className ? className : ""}`}>{children}</div>
    )
}

export default Container