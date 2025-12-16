import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Head of Sales - AI-руководитель отдела продаж',
  description: 'Анализ звонков, коучинг менеджеров, рекомендации по сделкам с помощью искусственного интеллекта. Рост конверсии на 20-40%.',
  keywords: 'AI продажи, анализ звонков, коучинг менеджеров, CRM аналитика, отдел продаж, искусственный интеллект',
  authors: [{ name: 'Sales Whisper' }],
  metadataBase: new URL('https://headofsales.saleswhisper.pro'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Head of Sales - AI-руководитель для РОП',
    description: 'Рост конверсии на 20-40%. Анализируем каждый звонок, даем рекомендации менеджерам.',
    url: 'https://headofsales.saleswhisper.pro',
    siteName: 'Head of Sales',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Head of Sales - AI-коучинг для отдела продаж',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Head of Sales - AI-коучинг для отдела продаж',
    description: 'Анализ звонков, AI-рекомендации, прогноз сделок',
    images: ['/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Head of Sales',
  description: 'AI-руководитель отдела продаж. Анализ звонков, коучинг менеджеров, рекомендации по сделкам.',
  url: 'https://headofsales.saleswhisper.pro',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'RUB',
    lowPrice: '0',
    highPrice: '7990',
    offers: [
      {
        '@type': 'Offer',
        name: 'Demo',
        price: '0',
        priceCurrency: 'RUB',
        description: '7 дней бесплатно',
      },
      {
        '@type': 'Offer',
        name: 'Pro',
        price: '2990',
        priceCurrency: 'RUB',
        description: 'Для отдела продаж',
      },
      {
        '@type': 'Offer',
        name: 'Enterprise',
        price: '7990',
        priceCurrency: 'RUB',
        description: 'Для крупных команд',
      },
    ],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Sales Whisper',
    url: 'https://saleswhisper.pro',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
