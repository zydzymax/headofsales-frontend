import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Тарифы Head of Sales | AI-коучинг для отдела продаж',
  description: 'Выберите оптимальный тариф: Demo (бесплатно), Pro (2990 руб/мес), Enterprise (7990 руб/мес). AI-анализ звонков, коучинг менеджеров, прогноз сделок.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Тарифы Head of Sales | AI-коучинг для продаж',
    description: 'Pro от 2990 руб/мес. Анализ звонков, AI-коучинг, интеграция с amoCRM.',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
