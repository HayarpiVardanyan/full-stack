'use client'
import Link from 'next/link'
import styles from '@/styles/main-page/index.module.scss'
import { useLang } from '@/hooks/useLang'

const AllLink = () => {
  const { lang, translations } = useLang()

  return (
    <Link href='/catalog' className={styles.all}>
      <span />
      {translations[lang].common.all_link}
    </Link>
  )
}

export default AllLink
