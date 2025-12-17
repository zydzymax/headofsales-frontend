'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Users, TrendingUp, TrendingDown, Phone, Target,
  Award, AlertTriangle, ChevronDown, Calendar,
  BarChart3, PieChart, ArrowUp, ArrowDown, Minus
} from 'lucide-react'

interface Manager {
  id: string
  name: string
  avatar?: string
  role: string
  calls_count: number
  avg_score: number
  conversion_rate: number
  deals_closed: number
  revenue: number
  trend: 'up' | 'down' | 'stable'
  score_change: number
  best_skill: string
  needs_improvement: string
}

interface TeamStats {
  total_calls: number
  avg_score: number
  total_revenue: number
  conversion_rate: number
  calls_change: number
  score_change: number
  revenue_change: number
}

const demoManagers: Manager[] = [
  {
    id: '1',
    name: 'Иван Петров',
    role: 'Старший менеджер',
    calls_count: 156,
    avg_score: 87,
    conversion_rate: 32,
    deals_closed: 12,
    revenue: 2450000,
    trend: 'up',
    score_change: 5,
    best_skill: 'Работа с возражениями',
    needs_improvement: 'Закрытие сделки',
  },
  {
    id: '2',
    name: 'Мария Сидорова',
    role: 'Менеджер',
    calls_count: 134,
    avg_score: 82,
    conversion_rate: 28,
    deals_closed: 9,
    revenue: 1890000,
    trend: 'up',
    score_change: 8,
    best_skill: 'Выявление потребностей',
    needs_improvement: 'Презентация продукта',
  },
  {
    id: '3',
    name: 'Алексей Козлов',
    role: 'Менеджер',
    calls_count: 98,
    avg_score: 65,
    conversion_rate: 18,
    deals_closed: 5,
    revenue: 980000,
    trend: 'down',
    score_change: -12,
    best_skill: 'Первичный контакт',
    needs_improvement: 'Работа с возражениями',
  },
  {
    id: '4',
    name: 'Елена Новикова',
    role: 'Менеджер',
    calls_count: 112,
    avg_score: 78,
    conversion_rate: 25,
    deals_closed: 7,
    revenue: 1560000,
    trend: 'stable',
    score_change: 1,
    best_skill: 'Закрытие сделки',
    needs_improvement: 'Скорость ответа',
  },
  {
    id: '5',
    name: 'Дмитрий Волков',
    role: 'Стажер',
    calls_count: 45,
    avg_score: 58,
    conversion_rate: 12,
    deals_closed: 2,
    revenue: 320000,
    trend: 'up',
    score_change: 15,
    best_skill: 'Обучаемость',
    needs_improvement: 'Опыт переговоров',
  },
]

const demoTeamStats: TeamStats = {
  total_calls: 545,
  avg_score: 74,
  total_revenue: 7200000,
  conversion_rate: 23,
  calls_change: 12,
  score_change: 3,
  revenue_change: 18,
}

export default function TeamPage() {
  const [managers] = useState<Manager[]>(demoManagers)
  const [teamStats] = useState<TeamStats>(demoTeamStats)
  const [selectedPeriod, setSelectedPeriod] = useState('month')
  const [sortBy, setSortBy] = useState<'score' | 'calls' | 'revenue'>('score')

  const sortedManagers = [...managers].sort((a, b) => {
    switch (sortBy) {
      case 'score': return b.avg_score - a.avg_score
      case 'calls': return b.calls_count - a.calls_count
      case 'revenue': return b.revenue - a.revenue
      default: return 0
    }
  })

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400'
    if (score >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <ArrowUp className="w-4 h-4 text-green-400" />
      case 'down': return <ArrowDown className="w-4 h-4 text-red-400" />
      default: return <Minus className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800/50 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Команда и KPI</h1>
            <p className="text-gray-400 mt-1">Показатели эффективности менеджеров</p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
            >
              <option value="week">Неделя</option>
              <option value="month">Месяц</option>
              <option value="quarter">Квартал</option>
            </select>
            <Link
              href="/dashboard"
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
            >
              Назад к дашборду
            </Link>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Team Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <Phone className="w-8 h-8 text-purple-400" />
              <span className={`text-sm ${teamStats.calls_change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {teamStats.calls_change >= 0 ? '+' : ''}{teamStats.calls_change}%
              </span>
            </div>
            <div className="text-3xl font-bold text-white">{teamStats.total_calls}</div>
            <div className="text-gray-400 text-sm">Звонков за период</div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-8 h-8 text-blue-400" />
              <span className={`text-sm ${teamStats.score_change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {teamStats.score_change >= 0 ? '+' : ''}{teamStats.score_change}%
              </span>
            </div>
            <div className="text-3xl font-bold text-white">{teamStats.avg_score}</div>
            <div className="text-gray-400 text-sm">Средний балл</div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="w-8 h-8 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white">{teamStats.conversion_rate}%</div>
            <div className="text-gray-400 text-sm">Конверсия</div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <Award className="w-8 h-8 text-yellow-400" />
              <span className={`text-sm ${teamStats.revenue_change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {teamStats.revenue_change >= 0 ? '+' : ''}{teamStats.revenue_change}%
              </span>
            </div>
            <div className="text-3xl font-bold text-white">{formatCurrency(teamStats.total_revenue)}</div>
            <div className="text-gray-400 text-sm">Выручка команды</div>
          </div>
        </div>

        {/* Managers Table */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-700 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Users className="w-5 h-5" />
              Рейтинг менеджеров
            </h2>
            <div className="flex gap-2">
              {[
                { key: 'score', label: 'По баллам' },
                { key: 'calls', label: 'По звонкам' },
                { key: 'revenue', label: 'По выручке' },
              ].map(item => (
                <button
                  key={item.key}
                  onClick={() => setSortBy(item.key as typeof sortBy)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    sortBy === item.key
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <table className="w-full">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Менеджер</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase">Звонки</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase">Балл</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase">Конверсия</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase">Сделки</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">Выручка</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase">Тренд</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {sortedManagers.map((manager, idx) => (
                <tr key={manager.id} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      idx === 0 ? 'bg-yellow-500/20 text-yellow-400' :
                      idx === 1 ? 'bg-gray-400/20 text-gray-300' :
                      idx === 2 ? 'bg-orange-500/20 text-orange-400' :
                      'bg-gray-700 text-gray-400'
                    }`}>
                      {idx + 1}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-white">{manager.name}</div>
                      <div className="text-sm text-gray-400">{manager.role}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-white">{manager.calls_count}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-lg font-bold ${getScoreColor(manager.avg_score)}`}>
                      {manager.avg_score}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-white">{manager.conversion_rate}%</td>
                  <td className="px-6 py-4 text-center text-white">{manager.deals_closed}</td>
                  <td className="px-6 py-4 text-right text-white">{formatCurrency(manager.revenue)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1">
                      {getTrendIcon(manager.trend)}
                      <span className={`text-sm ${
                        manager.score_change > 0 ? 'text-green-400' :
                        manager.score_change < 0 ? 'text-red-400' :
                        'text-gray-400'
                      }`}>
                        {manager.score_change > 0 ? '+' : ''}{manager.score_change}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Skills Analysis */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-green-400" />
              Сильные стороны
            </h3>
            <div className="space-y-3">
              {sortedManagers.slice(0, 3).map(manager => (
                <div key={manager.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <div>
                    <div className="font-medium text-white">{manager.name}</div>
                    <div className="text-sm text-green-400">{manager.best_skill}</div>
                  </div>
                  <span className={`text-lg font-bold ${getScoreColor(manager.avg_score)}`}>
                    {manager.avg_score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              Требуют внимания
            </h3>
            <div className="space-y-3">
              {sortedManagers.filter(m => m.avg_score < 70).map(manager => (
                <div key={manager.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <div>
                    <div className="font-medium text-white">{manager.name}</div>
                    <div className="text-sm text-yellow-400">{manager.needs_improvement}</div>
                  </div>
                  <span className={`text-lg font-bold ${getScoreColor(manager.avg_score)}`}>
                    {manager.avg_score}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
