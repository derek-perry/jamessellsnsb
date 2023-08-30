import { FC } from 'react'
import Link from 'next/link'

interface IButtonInternalProps {
  href: string;
  title: string;
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
}

const ButtonInternal: FC<IButtonInternalProps> = ({
  href,
  title,
  children,
  className
}): JSX.Element => {
  const linkBase = process.env.NEXT_PUBLIC_SITE_URL || ""

  return (
    <Link href={linkBase + '/' + href || './' + href} title={title} className={"text-center text-white group " + className}>
      <div className="rounded bg-[#252162] group-focus:bg-sky-800 group-hover:bg-cyan-600 py-8 px-10 text-2xl transition-all motion-reduce:transition-none motion-reduce:hover:transform-none">{children}</div>
    </Link>
  )
}

export default ButtonInternal