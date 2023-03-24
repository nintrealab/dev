import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="text-[10px] px-2 py-0.5 rounded-md sm:bg-slate-100 dark:bg-slate-800 font-medium text-primary-500 hover:text-primary-800 dark:hover:text-primary-400">
        {/* {text.split(' ').join('-')} */}
        {text}
      </a>
    </Link>
  )
}

export default Tag
