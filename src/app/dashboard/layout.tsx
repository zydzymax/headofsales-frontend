import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Личный кабинет | Head of Sales Dashboard',
  description: 'Дашборд с аналитикой звонков, рейтингом менеджеров, AI-рекомендациями и метриками команды продаж.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/dashboard',
  },
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
