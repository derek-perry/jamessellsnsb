import { FC } from 'react'
import Link from 'next/link'

interface IButtonExternalProps {
  href: string;
  title: string;
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
}

const ButtonExternal: FC<IButtonExternalProps> = ({
  href,
  title,
  children,
  className
}): JSX.Element => {
  return (
    <Link href={href} title={title} target="_blank" rel="noopener noreferrer" className={"text-center text-white group " + className}>
      <div className="rounded bg-[#252162] group-focus:bg-sky-800 group-hover:bg-cyan-600 py-8 px-10 text-2xl transition-all motion-reduce:transition-none motion-reduce:hover:transform-none">{children}</div>
    </Link>
  )
}

export default ButtonExternal