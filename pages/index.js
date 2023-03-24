import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import NewsletterForm from '@/components/NewsletterForm'
import axios from 'axios'


const fetchingData = async () => {
  return axios.get('https://api.npoint.io/fd95ed8784305496350b')
  .then(({data})=>{
    return data.result
  })
  .catch(err => {
    console.log(err);
  })
}


export default function Home() {
  
  const [query, setQuery] = useState("")
  const [data, setDatas] = useState('')

  useEffect(()=>{
    fetchingData().then((data)=>{
      setDatas(data || '');
    });
  },[])


  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <input 
          className='w-full border col-span-2 rounded-md px-5 p-2 right-2 focus:outline-red-400' 
          placeholder="Search for title ..." 
          onChange={ event => setQuery(event.target.value) } 
        />
        <div className="space-y-2 pt-6 sm:pb-8 md:space-y-5">
          <p className="text-sm sm:text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 py-5">
          {
            !data.length && <li className="rounded-xl h-60 col-span-1 overflow-hidden shadow-xl bg-white shadow-sky-100 dark:shadow-slate-800 dark:shadow-2xl p-5"></li>
          }
          {
            data ? data.filter(
              post => {
                if (query === '') {
                  return post;
                } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                  return post;
                }
              }
            ).map(
              (frontMatter, i) =>  {
                const { 
                  date, 
                  title, 
                  auth,
                  thumbnail 
                } = frontMatter
                return (

                  <li 
                    key={i} 
                    className="rounded-xl col-span-1 overflow-hidden shadow-xl shadow-sky-100 dark:shadow-slate-800 dark:shadow-2xl">
                    <article>
                      <Link
                        href={`/post/${i}`}
                        className="text-gray-900 dark:text-gray-100"
                      >
                        <Image
                          className="object-cover"
                          src={thumbnail ?? ''}
                          width={`512`}
                          height={`300`}
                          alt={title}
                        />
                      </Link>

                      <section className='flex flex-col justify-start w-full gap-1 px-3 pb-4'>
                        <dd className="text-xs mt-2 flex flex-col sm:flex-row items-center justify-between font-medium leading-5 text-gray-500 dark:text-gray-400">
                          <time className='text-[8px] sm:text-xs' dateTime={date}>{formatDate(date)}</time>
                          <Tag text={auth} />
                        </dd>
                        <h1 className='text-xs sm:text-base font-medium leading-6 line-clamp-2 min-h-[2rem]'> {title} </h1>
                      </section>

                    </article>
                  </li>
                )
              }
            ):''
          }
        </ul>
      </div>

      {
        siteMetadata.newsletter.provider !== '' && (
          <div className="flex items-center justify-center pt-4">
            <NewsletterForm />
          </div>
        )
      }
    </>
  )
}
