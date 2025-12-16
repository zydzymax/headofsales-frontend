'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  Brain, Phone, BarChart3, Users, Settings, LogOut,
  TrendingUp, TrendingDown, Clock, CheckCircle2, 
  AlertCircle, Play, Loader2, MessageSquare
} from 'lucide-react'

interface User {
  id: number
  first_name: string
  last_name?: string
  username?: string
  photo_url?: string
}

// Demo data
const demoStats = {
  calls_analyzed: 47,
  avg_score: 72,
  conversion_rate: 23,
  deals_in_progress: 12,
}

const demoManagers = [
  { id: 1, name: 'Иван Петров', calls: 15, score: 85, trend: 'up' },
  { id: 2, name: 'Мария Сидорова', calls: 12, score: 78, trend: 'up' },
  { id: 3, name: 'Алексей Козлов', calls: 10, score: 65, trend: 'down' },
  { id: 4, name: 'Елена Новикова', calls: 10, score: 72, trend: 'stable' },
]

const demoRecentCalls = [
  { id: 1, manager: 'Иван Петров', client: 'ООО Рога и Копыта', duration: '12:34', score: 92, status: 'success' },
  { id: 2, manager: 'Мария Сидорова', client: 'ИП Сидоров', duration: '8:21', score: 78, status: 'success' },
  { id: 3, manager: 'Алексей Козлов', client: 'АО Технологии', duration: '5:45', score: 45, status: 'warning' },
]

const demoRecommendations = [
  { manager: 'Алексей Козлов', text: 'Рекомендуется работа над возражениями. Клиент потерял интерес на этапе цены.' },
  { manager: 'Мария Сидорова', text: 'Отличная работа с возражениями! Можно усилить закрытие сделки.' },
]

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('hos_token')
    const userData = localStorage.getItem('hos_user')
    
    if (!token) {
      router.push('/login')
      return
    }
    
    if (userData) {
      setUser(JSON.parse(userData))
    }
    
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('hos_token')
    localStorage.removeItem('hos_user')
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-red-400" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white/5 border-r border-white/10 p-4 flex flex-col">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Head of Sales</h1>
            <p className="text-xs text-gray-400">by Sales Whisper</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { id: 'dashboard', icon: BarChart3, label: 'Дашборд' },
            { id: 'calls', icon: Phone, label: 'Звонки' },
            { id: 'team', icon: Users, label: 'Команда' },
            { id: 'settings', icon: Settings, label: 'Настройки' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Demo warning */}
        <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Demo режим</span>
          </div>
          <p className="text-xs text-gray-400">
            Данные демонстрационные. Подключите CRM для реальной аналитики.
          </p>
        </div>

        {/* User */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-3">
            {user?.photo_url ? (
              <img src={user.photo_url} alt="" className="w-10 h-10 rounded-full" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <span className="text-red-400 font-medium">
                  {user?.first_name?.[0] || 'U'}
                </span>
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{user?.first_name || 'User'}</p>
              <p className="text-xs text-gray-400 truncate">@{user?.username}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Выйти</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {activeTab === 'dashboard' && (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Добро пожаловать!</h2>
              <p className="text-gray-400">Обзор эффективности отдела продаж</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Звонков проанализировано', value: demoStats.calls_analyzed, icon: Phone },
                { label: 'Средний балл', value: demoStats.avg_score + '%', icon: BarChart3 },
                { label: 'Конверсия', value: demoStats.conversion_rate + '%', icon: TrendingUp },
                { label: 'Сделок в работе', value: demoStats.deals_in_progress, icon: Clock },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="w-4 h-4 text-red-400" />
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Managers */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Рейтинг менеджеров</h3>
                <div className="space-y-3">
                  {demoManagers.map((manager) => (
                    <div
                      key={manager.id}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                          <span className="text-red-400 font-medium">
                            {manager.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{manager.name}</p>
                          <p className="text-xs text-gray-400">{manager.calls} звонков</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-lg font-bold ${
                          manager.score >= 80 ? 'text-green-400' :
                          manager.score >= 60 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {manager.score}%
                        </span>
                        {manager.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-400" />}
                        {manager.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-400" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent calls */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Последние звонки</h3>
                <div className="space-y-3">
                  {demoRecentCalls.map((call) => (
                    <div
                      key={call.id}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium">{call.client}</p>
                        <p className="text-xs text-gray-400">{call.manager} • {call.duration}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          call.score >= 70 ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {call.score}%
                        </span>
                        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
                          <Play className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">AI-рекомендации</h3>
              <div className="space-y-3">
                {demoRecommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3"
                  >
                    <MessageSquare className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-400 mb-1">{rec.manager}</p>
                      <p className="text-sm text-gray-300">{rec.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'calls' && (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Анализ звонков</h2>
              <p className="text-gray-400">История и детальный анализ разговоров</p>
            </div>
            <div className="p-8 rounded-xl bg-white/5 border border-white/10 text-center">
              <Phone className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Подключите amoCRM для загрузки звонков</p>
            </div>
          </>
        )}

        {activeTab === 'team' && (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Команда</h2>
              <p className="text-gray-400">Управление менеджерами и их показателями</p>
            </div>
            <div className="grid gap-4">
              {demoManagers.map((manager) => (
                <div
                  key={manager.id}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 font-medium text-lg">
                        {manager.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-lg">{manager.name}</p>
                      <p className="text-sm text-gray-400">{manager.calls} звонков за неделю</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${
                      manager.score >= 80 ? 'text-green-400' :
                      manager.score >= 60 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {manager.score}%
                    </p>
                    <p className="text-sm text-gray-400">Средний балл</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'settings' && (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Настройки</h2>
              <p className="text-gray-400">Интеграции и параметры системы</p>
            </div>
            <div className="max-w-2xl space-y-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="font-semibold mb-4">Интеграция с amoCRM</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Подключите amoCRM для автоматической загрузки звонков и синхронизации сделок.
                </p>
                <button className="px-4 py-2 bg-blue-500 rounded-lg font-medium hover:bg-blue-600 transition">
                  Подключить amoCRM
                </button>
              </div>
              
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="font-semibold mb-4">Уведомления</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span className="text-sm">Уведомления о низких оценках</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-red-500" />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-sm">Еженедельный отчёт</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-red-500" />
                  </label>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
