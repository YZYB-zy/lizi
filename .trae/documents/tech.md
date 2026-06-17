## 1. Architecture Design
Frontend Page → Click to Purchase Link

## 2. Technology Description
- Frontend: React@18 + tailwindcss@3 + vite
- Initialization Tool: vite-init
- Backend: None (纯前端展示页面)

## 3. Route Definitions
| Route | Purpose |
|-------|---------|
| / | 首页，展示玉皇李图片和介绍 |

## 4. API Definitions
- 无API需求（纯前端静态页面）

## 5. Server Architecture Diagram
- 无后端服务

## 6. Data Model
- 无数据库需求

## 7. Project Structure
src/
├── components/
│   ├── ImageCard.tsx    # 图片卡片组件
│   ├── Header.tsx       # 页头组件
│   └── ProductIntro.tsx # 产品介绍组件
├── pages/
│   └── Home.tsx         # 首页
├── App.tsx
├── main.tsx
└── index.css
