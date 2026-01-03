# 実装計画書 - モダンタスク管理アプリ

## 目標
**React** と **Vite** を使用して、視覚的に魅力的でレスポンシブなタスク管理アプリケーションを作成します。「グラスモーフィズム（Glassmorphism）」を取り入れたモダンでプレミアムなデザイン、スムーズなアニメーション、洗練されたユーザーインターフェースを目指します。

## ユーザーレビューが必要な事項
> [!NOTE]
> Material UIやChakra UIなどの外部UIライブラリは使用しません。システム指示に従い、最大限のカスタマイズ性と独自性を確保するため、すべてのスタイリングは **Vanilla CSS** で行います。

## 提案する変更内容

### 技術スタック
- **ビルドツール**: Vite
- **フレームワーク**: React
- **スタイリング**: Vanilla CSS (CSS変数を使用したテーマ管理)
- **フォント**: Google Fonts (モダンな印象を与える Inter または Noto Sans JP)

### [Design System]
#### [NEW] [index.css](file:///Users/kamitsui/Documents/tmp/task-manager/src/index.css)
- カラーパレット用のCSS変数を定義 (ダークモダンテーマ):
    - 背景: 深みのあるリッチなグラデーション
    - 表面: 半透明のガラス効果 (backdrop-filter)
    - プライマリ: 鮮やかなアクセントカラー (例: ネオンパープル/ブルー)
    - テキスト: 高コントラストな白/グレー
- グローバルリセットとタイポグラフィ設定。

<details>
<summary>📄 index.css のソースコードを見る</summary>

<<< @/projects/task-manager/src/index.css

</details>


### [Components]
#### [NEW] [App.jsx](file:///Users/kamitsui/Documents/tmp/task-manager/src/App.jsx)
- 背景グラデーションを含むメインレイアウトコンテナ。
- アプリケーションの状態管理 (タスクのリスト)。
- ローカルストレージへの保存処理.

#### [NEW] [components/TaskForm.jsx](file:///Users/kamitsui/Documents/tmp/task-manager/src/components/TaskForm.jsx)
- フローティングラベルまたはアニメーション付きフォーカス状態を持つスタイリッシュな入力フィールド。
- ホバー時に光る効果を持つ「タスク追加」ボタン。

#### [NEW] [components/TaskList.jsx](file:///Users/kamitsui/Documents/tmp/task-manager/src/components/TaskList.jsx)
- タスクリストの表示領域。
- タスクがない場合のフレンドリーなメッセージ/アイコン表示。

#### [NEW] [components/TaskItem.jsx](file:///Users/kamitsui/Documents/tmp/task-manager/src/components/TaskItem.jsx)
- グラスモーフィズムスタイルの個別タスクカード。
- 完了チェックボックス (アニメーション付き)。
- 削除ボタン (ホバー時に表示、またはさりげなく常時表示)。

<details>
<summary>📦 全コンポーネントのソースコードをコードグループで見る</summary>

::: code-group
<<< @/projects/task-manager/src/App.jsx [App.jsx]
<<< @/projects/task-manager/src/components/TaskForm.jsx [TaskForm.jsx]
<<< @/projects/task-manager/src/components/TaskList.jsx [TaskList.jsx]
<<< @/projects/task-manager/src/components/TaskItem.jsx [TaskItem.jsx]
:::

</details>

## 🎓 練習ドリル：自力で作ってみよう！
このプロジェクトを自力で再現するためのステップバイステップ・ドリルです。

### ステップ1: 環境構築
1. `npm create vite@latest my-task-app -- --template react` でプロジェクトを作成。
2. `App.jsx` と `index.css` を空にします。

### ステップ2: デザインの基礎 (CSS)
1. `index.css` に `:root` 変数を定義し、深いグラデーションの背景を設定してください。
2. グラスモーフィズム（背景ぼかし）を実現するために `backdrop-filter: blur()` を使ってみましょう。

### ステップ3: 状態管理 (App.jsx)
1. `useState` を使って、タスクの配列（`tasks`）を管理してください。
2. タスクを追加する関数 `addTask` を作成してください。

### ステップ4: コンポーネント分割
1. **TaskForm**: 入力を受け取り、ボタンクリックで `addTask` を呼び出す。
2. **TaskList**: `tasks.map()` を使って複数の `TaskItem` を表示する。
3. **TaskItem**: 完了/未完了の切り替えと、削除機能を実装する。

### ステップ5: 永続化
1. `useEffect` を2つ使い、「初回読み込み時の取得」と「データ更新時の保存」を `localStorage` に対して実装してください。


## 検証計画

### 自動テスト
- **ビルド検証**: `npm run build` を実行し、エラーなくビルドできることを確認します。

### 手動検証
1.  **開発サーバーの起動**: `npm run dev` を実行し、ブラウザで開きます。
2.  **表示確認**:
    - 背景グラデーションとグラスモーフィズム効果が正しく適用されているか確認します。
    - 異なるウィンドウサイズでのレスポンスを確認します。
3.  **機能確認**:
    - 新しいタスクを追加 -> アニメーション付きでリストに追加されること。
    - タスクを完了にする -> テキストに取り消し線が付き、表示が薄くなること。
    - タスクを削除 -> リストから削除されること。
    - ページをリロード -> タスクが保持されていること (ローカルストレージ)。
