import { FC } from 'react'
import Link from 'next/link'

interface ILinkInternalProps {
  href: string;
  title: string;
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
}

const LinkInternal: FC<ILinkInternalProps> = ({
  href,
  title,
  children,
  className
}): JSX.Element => {
  const linkBase = process.env.NEXT_PUBLIC_SITE_URL || ""

  return (
    <Link href={linkBase + '/' + href || './' + href} title={title} className={"underline text-sky-600 focus:text-slate-500 hover:text-slate-400 hover:no-underline " + className + " transition-all motion-reduce:transition-none motion-reduce:hover:transform-none"}>
      {children}
    </Link>
  )
}

export default LinkInternal