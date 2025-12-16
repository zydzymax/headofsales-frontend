import Link from 'next/link'
import { 
  Brain, Phone, BarChart3, Target, Shield, Users,
  Check, ArrowRight, Sparkles, TrendingUp, MessageSquare,
  Zap, Award, Clock
} from 'lucide-react'

const features = [
  {
    icon: Phone,
    title: 'Анализ звонков',
    description: 'AI анализирует каждый звонок: выявляет ошибки, сильные стороны и точки роста менеджера.',
  },
  {
    icon: Brain,
    title: 'AI-коучинг',
    description: 'Персональные рекомендации для каждого менеджера на основе его реальных разговоров.',
  },
  {
    icon: Target,
    title: 'Прогноз сделок',
    description: 'Оценка вероятности закрытия сделки и рекомендации по дальнейшим действиям.',
  },
  {
    icon: BarChart3,
    title: 'Аналитика команды',
    description: 'Дашборд с метриками по каждому менеджеру и отделу в целом.',
  },
]

const benefits = [
  { icon: TrendingUp, text: 'Рост конверсии на 20-40%' },
  { icon: Clock, text: 'Экономия 10+ часов в неделю на контроле' },
  { icon: Award, text: 'Быстрый онбординг новых менеджеров' },
  { icon: Users, text: 'Масштабирование лучших практик' },
]

const pricing = [
  {
    name: 'Demo',
    price: '0₽',
    period: '7 дней',
    description: 'Попробуйте все функции',
    features: ['10 анализов звонков', 'AI-рекомендации', 'Базовая аналитика'],
    cta: 'Начать бесплатно',
    popular: false,
  },
  {
    name: 'Pro',
    price: '2 990₽',
    period: 'месяц',
    description: 'Для отдела продаж',
    features: ['100 анализов/мес', 'AI-коучинг', 'Прогноз сделок', 'amoCRM интеграция', 'Приоритетная поддержка'],
    cta: 'Выбрать Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '7 990₽',
    period: 'месяц',
    description: 'Для крупных команд',
    features: ['Безлимит анализов', 'AI-коучинг', 'Прогноз сделок', 'amoCRM + Bitrix24', 'API доступ', 'Выделенная поддержка'],
    cta: 'Связаться',
    popular: false,
  },
]

const faq = [
  {
    q: 'Как происходит анализ звонков?',
    a: 'Звонки автоматически подгружаются из вашей CRM или АТС. AI транскрибирует разговор и анализирует по 15+ параметрам.',
  },
  {
    q: 'Какие CRM поддерживаются?',
    a: 'Полная интеграция с amoCRM. Bitrix24 на тарифе Enterprise. Другие CRM — по запросу.',
  },
  {
    q: 'Насколько точны рекомендации AI?',
    a: 'AI обучен на тысячах успешных сделок. Точность прогноза закрытия — 85%+.',
  },
  {
    q: 'Безопасны ли данные?',
    a: 'Все данные шифруются. Записи хранятся на серверах в РФ. Соответствие 152-ФЗ.',
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-gray-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <Brain className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg">Head of Sales</span>
              <span className="text-xs text-gray-400">by Sales Whisper</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-400 hover:text-white transition">Возможности</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition">Тарифы</a>
              <a href="#faq" className="text-gray-400 hover:text-white transition">FAQ</a>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-gray-400 hover:text-white transition">Войти</Link>
              <Link 
                href="/login" 
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-medium hover:opacity-90 transition"
              >
                Начать
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-300">AI-руководитель отдела продаж</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Увеличьте продажи с AI-коучингом
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Анализируем каждый звонок, даём рекомендации менеджерам, 
            прогнозируем закрытие сделок. Как РОП, только без выходных.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              href="/login"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              Попробовать бесплатно
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="#features"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-lg hover:bg-white/10 transition"
            >
              Как это работает
            </a>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit) => (
              <div 
                key={benefit.text}
                className="p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <benefit.icon className="w-6 h-6 text-red-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Что умеет Head of Sales</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Полный набор инструментов для роста продаж и развития команды
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition">
                  <feature.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-red-950/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Как это работает</h2>
          
          <div className="space-y-8">
            {[
              { step: '1', title: 'Подключите CRM', desc: 'Интеграция с amoCRM занимает 5 минут. Звонки начнут подгружаться автоматически.' },
              { step: '2', title: 'AI анализирует звонки', desc: 'Каждый звонок транскрибируется и анализируется по 15+ параметрам.' },
              { step: '3', title: 'Получайте рекомендации', desc: 'Менеджеры видят персональные советы, РОП — общую картину по команде.' },
              { step: '4', title: 'Растите в продажах', desc: 'Отслеживайте прогресс и наблюдайте рост конверсии.' },
            ].map((item, index) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Простые тарифы</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            7 дней бесплатно. Без карты. Отмена в любой момент.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan) => (
              <div 
                key={plan.name}
                className={`p-6 rounded-2xl border ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-red-500/10 to-orange-500/10 border-red-500/50' 
                    : 'bg-white/5 border-white/10'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-xs font-medium">
                    Популярный
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">/ {plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/login"
                  className={`block w-full py-3 rounded-xl font-medium text-center transition ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:opacity-90' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Частые вопросы</h2>
          
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы увеличить продажи?</h2>
          <p className="text-gray-400 mb-8">7 дней бесплатно. Без карты. Без обязательств.</p>
          <Link 
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-semibold text-lg hover:opacity-90 transition"
          >
            Попробовать бесплатно
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <Brain className="w-4 h-4" />
              </div>
              <span className="font-bold">Head of Sales</span>
              <span className="text-xs text-gray-400">by Sales Whisper</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="mailto:support@saleswhisper.pro" className="hover:text-white transition">Поддержка</a>
              <a href="https://saleswhisper.pro/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Политика конфиденциальности</a>
              <a href="https://saleswhisper.pro/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Условия использования</a>
            </div>
            
            <div className="text-sm text-gray-500">
              © 2025 Sales Whisper. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
