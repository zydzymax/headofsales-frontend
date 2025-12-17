# Head of Sales Frontend

[![CI](https://github.com/zydzymax/headofsales-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/zydzymax/headofsales-frontend/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)

Дашборд руководителя отдела продаж с AI-анализом звонков и KPI команды.

> **Quick Start:** See [QUICK_START.md](QUICK_START.md) for fast setup.

## Функциональность

- 📞 AI-анализ звонков менеджеров
- 📊 KPI и метрики команды
- 🎯 Рекомендации по улучшению скриптов
- 📈 Рейтинг менеджеров
- 🔔 Уведомления о проблемных сделках

## Технологии

- **Next.js 14** - React фреймворк
- **TypeScript** - Типизация
- **Tailwind CSS** - Стилизация
- **Chart.js** - Графики и визуализации

## Структура проекта

```
src/
├── app/           # Next.js App Router
│   ├── dashboard/ # Основные страницы
│   │   ├── calls/ # Анализ звонков
│   │   └── team/  # KPI команды
│   └── login/     # Авторизация
├── components/    # React компоненты
└── lib/           # Утилиты
```

## Интеграция

Дашборд интегрируется с:
- **SalesBot MVP** - AI-анализ звонков
- **AmoCRM** - Данные о сделках и клиентах

## Деплой

```bash
npm run build
# Статические файлы в out/ раздаются через Nginx
```

## Связанные сервисы

- [salesbot-mvp](https://github.com/zydzymax/salesbot-mvp) - Backend AI анализа
- [crosspost-frontend](https://github.com/zydzymax/crosspost-frontend) - Crosspost UI
