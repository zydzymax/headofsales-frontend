'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Phone, Play, Pause, Clock, User, Building2,
  TrendingUp, TrendingDown, AlertTriangle, CheckCircle2,
  MessageSquare, Brain, Filter, Search, Download,
  ChevronDown, Star, ThumbsUp, ThumbsDown
} from 'lucide-react'

interface Call {
  id: string
  manager: string
  client: string
  company: string
  duration: string
  date: string
  score: number
  status: 'excellent' | 'good' | 'needs_work' | 'poor'
  deal_stage: string
  topics: string[]
  ai_summary: string
  recommendations: string[]
}

const demoCalls: Call[] = [
  {
    id: '1',
    manager: 'Иван Петров',
    client: 'Сергей Михайлов',
    company: 'ООО Рога и Копыта',
    duration: '12:34',
    date: '2024-12-17 14:30',
    score: 92,
    status: 'excellent',
    deal_stage: 'Переговоры',
    topics: ['Цена', 'Сроки', 'Доставка'],
    ai_summary: 'Успешный звонок. Менеджер отлично отработал возражения по цене, предложил гибкие условия оплаты. Клиент готов к следующему шагу.',
    recommendations: ['Подготовить коммерческое предложение', 'Запланировать демо продукта'],
  },
  {
    id: '2',
    manager: 'Мария Сидорова',
    client: 'Анна Козлова',
    company: 'ИП Козлова А.В.',
    duration: '8:21',
    date: '2024-12-17 13:15',
    score: 78,
    status: 'good',
    deal_stage: 'Первичный контакт',
    topics: ['Потребности', 'Бюджет'],
    ai_summary: 'Хороший первичный контакт. Выявлены основные потребности клиента. Рекомендуется уточнить бюджет на следующем звонке.',
    recommendations: ['Уточнить бюджет', 'Выслать презентацию'],
  },
  {
    id: '3',
    manager: 'Алексей Козлов',
    client: 'Дмитрий Новиков',
    company: 'АО Технологии Будущего',
    duration: '5:45',
    date: '2024-12-17 11:00',
    score: 45,
    status: 'needs_work',
    deal_stage: 'Возражения',
    topics: ['Цена', 'Конкуренты'],
    ai_summary: 'Звонок требует внимания. Менеджер не справился с возражением по цене, клиент сравнивает с конкурентами.',
    recommendations: ['Провести тренинг по работе с возражениями', 'Подготовить сравнительный анализ'],
  },
  {
    id: '4',
    manager: 'Елена Новикова',
    client: 'Павел Смирнов',
    company: 'ООО СмартТех',
    duration: '15:20',
    date: '2024-12-17 10:00',
    score: 85,
    status: 'excellent',
    deal_stage: 'Закрытие',
    topics: ['Условия договора', 'Оплата'],
    ai_summary: 'Отличный звонок на этапе закрытия. Согласованы все условия, клиент готов подписать договор.',
    recommendations: ['Подготовить договор', 'Выставить счет'],
  },
]

const statusConfig = {
  excellent: { label: 'Отлично', color: 'text-green-400 bg-green-500/10 border-green-500/30', icon: CheckCircle2 },
  good: { label: 'Хорошо', color: 'text-blue-400 bg-blue-500/10 border-blue-500/30', icon: ThumbsUp },
  needs_work: { label: 'Требует внимания', color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30', icon: AlertTriangle },
  poor: { label: 'Проблема', color: 'text-red-400 bg-red-500/10 border-red-500/30', icon: ThumbsDown },
}

export default function CallsPage() {
  const [calls] = useState<Call[]>(demoCalls)
  const [selectedCall, setSelectedCall] = useState<Call | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  const filteredCalls = calls.filter(call => {
    const matchesSearch =
      call.manager.toLowerCase().includes(searchQuery.toLowerCase()) ||
      call.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      call.company.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || call.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400'
    if (score >= 60) return 'text-blue-400'
    if (score >= 40) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800/50 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Анализ звонков</h1>
            <p className="text-gray-400 mt-1">AI-анализ разговоров с клиентами</p>
          </div>
          <Link
            href="/dashboard"
            className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            Назад к дашборду
          </Link>
        </div>
      </header>

      <div className="flex">
        {/* Calls List */}
        <div className="w-1/2 border-r border-gray-700 h-[calc(100vh-80px)] overflow-y-auto">
          {/* Filters */}
          <div className="p-4 border-b border-gray-700 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск по менеджеру, клиенту..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex gap-2">
              {['all', 'excellent', 'good', 'needs_work', 'poor'].map(status => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    statusFilter === status
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50'
                      : 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-600'
                  }`}
                >
                  {status === 'all' ? 'Все' : statusConfig[status as keyof typeof statusConfig]?.label}
                </button>
              ))}
            </div>
          </div>

          {/* Calls */}
          <div className="divide-y divide-gray-700">
            {filteredCalls.map(call => {
              const StatusIcon = statusConfig[call.status].icon
              return (
                <button
                  key={call.id}
                  onClick={() => setSelectedCall(call)}
                  className={`w-full p-4 text-left hover:bg-gray-800/50 transition-colors ${
                    selectedCall?.id === call.id ? 'bg-gray-800/50' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-medium text-white">{call.manager}</div>
                      <div className="text-sm text-gray-400">{call.client} - {call.company}</div>
                    </div>
                    <div className={`text-2xl font-bold ${getScoreColor(call.score)}`}>
                      {call.score}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {call.duration}
                    </span>
                    <span>{call.date}</span>
                    <span className={`flex items-center gap-1 px-2 py-0.5 rounded border ${statusConfig[call.status].color}`}>
                      <StatusIcon className="w-3 h-3" />
                      {statusConfig[call.status].label}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Call Details */}
        <div className="w-1/2 h-[calc(100vh-80px)] overflow-y-auto">
          {selectedCall ? (
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">{selectedCall.client}</h2>
                  <p className="text-gray-400">{selectedCall.company}</p>
                </div>
                <div className={`text-4xl font-bold ${getScoreColor(selectedCall.score)}`}>
                  {selectedCall.score}
                  <span className="text-sm text-gray-400 font-normal ml-1">/ 100</span>
                </div>
              </div>

              {/* Meta */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Менеджер</div>
                  <div className="font-medium text-white">{selectedCall.manager}</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Длительность</div>
                  <div className="font-medium text-white">{selectedCall.duration}</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Этап сделки</div>
                  <div className="font-medium text-white">{selectedCall.deal_stage}</div>
                </div>
              </div>

              {/* Topics */}
              <div>
                <h3 className="font-medium text-white mb-2">Темы разговора</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCall.topics.map(topic => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI Summary */}
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <h3 className="font-medium text-white">AI-анализ</h3>
                </div>
                <p className="text-gray-300">{selectedCall.ai_summary}</p>
              </div>

              {/* Recommendations */}
              <div>
                <h3 className="font-medium text-white mb-3">Рекомендации</h3>
                <div className="space-y-2">
                  {selectedCall.recommendations.map((rec, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-gray-800/50 rounded-lg p-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                      <span className="text-gray-300">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-gray-700">
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                  <Play className="w-4 h-4" />
                  Прослушать
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  <Download className="w-4 h-4" />
                  Скачать
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  Комментарий
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <div className="text-center">
                <Phone className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Выберите звонок для просмотра деталей</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
