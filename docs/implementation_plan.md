# 実装計画書 - Antigravity Lab (実験場プロジェクト)

## 目標
複数のプロジェクト（task-manager, number-guessing-game等）を一元管理し、それらの技術ドキュメントを美しく公開するための「ハブとなるリポジトリ」を構築します。

## 提案する構造: "The Centralized Lab"

### 1. リポジトリ構成 (Monorepo-style)
```text
antigravity-lab/
├── README.md               # ラボ全体の概要
├── docs/                   # 共通の技術ドキュメント・学習メモ
├── projects/               # 各プロジェクトを配置
│   ├── task-manager/
│   └── number-guessing-game/
└── website/                # ドキュメント公開用のWebサイト (VitePress)
```

### 2. ドキュメント公開方法: VitePress の活用
Viteベースで非常に高速、かつデフォルトでモダンなデザイン（ダークモード完備）が提供される **VitePress** を推奨します。

- **理由**: 
  - すでにViteに慣れているため親和性が高い。
  - Markdownをそのまま美しいドキュメントページに変換できる。
  - GitHub Pagesとの相性が抜群。

## 実装ステップ

### [Foundation]
- Rootディレクトリ `antigravity-lab` の作成。
- 既存プロジェクトを `projects/` 配下へ移動。

### [Documentation Hub]
- `website/` に VitePress を初期化。
- 各プロジェクトの `docs/` 内の内容（implementation_plan.md 等）を VitePress のメニューに統合。

### [Deployment]
- GitHub Actions を設定し、`website/` の内容を GitHub Pages にデプロイ。

## ユーザーへの提案
まずは、このディレクトリ構造を作成し、既存の2つのプロジェクトを統合する作業から始めましょうか？
その後、VitePressを導入して「技術ドキュメントサイト」のベースを作成します。
