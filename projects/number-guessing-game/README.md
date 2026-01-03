# Python 数当てゲーム (Premium CLI Edition)

Python と `rich` ライブラリを使用した、視覚的に洗練されたコマンドラインインターフェース（CLI）の数当てゲームです。

![Number Guessing Game Screenshot](/screenshots/number-game.png)

## ✨ 特徴

- **リッチなUI**: `rich` ライブラリによるカラー出力、テーブル表示、スタイリッシュなパネル。
- **難易度設定**: 3つの難易度（Easy, Medium, Hard）から選択可能。
- **ランクシステム**: 試行回数に基づいたクリアランク付け（S〜C）。
- **ユーザーフレンドリー**: 入力バリデーションと親切なヒント機能。

## 🚀 セットアップと実行方法

### 前提条件
- Python 3.6以上

### 1. リポジトリのクローン
```bash
git clone https://github.com/kamitsui/number-guessing-game.git
# or
# git clone git@github.com:kamitsui/number-guessing-game.git
cd number-guessing-game
```

### 2. 仮想環境の作成と有効化
```bash
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
# Windowsの場合: venv\Scripts\activate
```

### 3. 依存ライブラリのインストール
```bash
pip install -r requirements.txt
```

### 4. ゲームの実行
```bash
python main.py
```

## 📂 プロジェクト構造

```text
number-guessing-game/
├── main.py              # エントリーポイントとUIロジック
├── game_logic.py        # ゲームのコアロジック
├── requirements.txt     # 依存ライブラリリスト
├── .gitignore           # Git除外設定
├── README.md            # プロジェクト説明（このファイル）
└── docs/                # 開発ドキュメント
    ├── task.md          # 開発工程の記録
    └── implementation_plan.md  # 実装計画書
```

## 🛠️ 使用技術
- **Python 3**
- **[Rich](https://github.com/Textualize/rich)**: ターミナルでの美しいレンダリングを実現

## 📝 開発の背景
このプロジェクトは、AIアシスタント「Antigravity」を使用して、モダンなCLI設計とPythonのクリーンなコーディングパターンを学ぶためのデモンストレーションとして作成されました。
