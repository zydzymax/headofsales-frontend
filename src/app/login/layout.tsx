import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Вход в Head of Sales | Авторизация через Telegram',
  description: 'Войдите в личный кабинет Head of Sales через Telegram для доступа к AI-аналитике отдела продаж.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/login',
  },
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
