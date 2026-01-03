# Modern Task Management App - Walkthrough

ReactとViteを使用した、モダンなデザインのタスク管理アプリが完成しました。
「グラスモーフィズム」を取り入れた美しいUIで、日々のタスク管理を楽しくします。

[🚀 ライブデモを見る](/apps/task-manager/index.html)

## ✨ 実装機能

### 1. モダンなデザインシステム
- **Glassmorphism**: 半透明のパネル、ぼかし効果、繊細なボーダーを使用したプレミアムな外観。
- **Animations**: タスク追加時のフェードインや、ホバー時のスムーズなトランジション。
- **Dark Theme**: 目に優しい深みのある背景グラデーション。

### 2. 機能
- **タスクの追加**: エンターキーまたは追加ボタンでスムーズに登録。
- **タスクの完了**: チェックボックスで完了状態を切り替え。完了タスクはスタイルが変化します。
- **タスクの削除**: 不要なタスクを削除可能。
- **データ永続化**: ブラウザを閉じてもタスクが消えないよう、LocalStorageに自動保存されます。

## 🛠️ 技術的な変更点

- **Vite 5**: Node.js v20との互換性を確保するため、Viteのバージョンを調整しました。
- **Vanilla CSS**: 外部ライブラリに依存せず、CSS変数（Custom Properties）を駆使して柔軟なテーマ設計を行いました。

## 🚀 アプリの起動方法

ターミナルで以下のコマンドを実行してください：

```bash
cd task-manager
npm install
npm run dev
```

表示されるURL（例: `http://localhost:5173`）をブラウザで開くと、アプリを使用できます。

## 📸 スクリーンショット

![Task Manager Screenshot](/screenshots/task-manager.png)
