# Python 数当てゲーム - Walkthrough

Pythonと`rich`ライブラリを使用した、プレミアムなCLI数当てゲームが完成しました！

## ✨ ゲームの特徴

1.  **洗練されたUI**:
    - `rich` ライブラリにより、ターミナル上でカラフルなパネル、テーブル、プロンプトを表示します。
2.  **3段階の難易度**:
    - Easy (1-10), Medium (1-50), Hard (1-100) から選択可能。
3.  **ランク付け機能**:
    - 試行回数に応じて、SからCまでのランクが表示されます。
4.  **入力バリデーション**:
    - 数字以外や範囲外の入力に対して、丁寧にエラーメッセージを表示します。

## 🛠️ 技術的なハイライト

- **モジュール化**: ロジック (`game_logic.py`) と表示 (`main.py`) を分離。
- **仮想環境**: `venv` を使用してプロジェクトごとに依存関係を管理。

## 🚀 実行方法

ターミナルで以下のコマンドを実行してください：

```bash
cd Documents/tmp/number-guessing-game
source venv/bin/activate
python main.py
```

## 📸 スクリーンショット

![Number Guessing Game Screenshot](/screenshots/number-game.webp)

## 📜 ドキュメント

- [実装計画書](./implementation_plan.md)
- [完了済みタスク](./task.md)
