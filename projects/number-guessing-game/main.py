import sys
from rich.console import Console
from rich.panel import Panel
from rich.prompt import Prompt, IntPrompt
from rich.table import Table
from rich.live import Live
from rich.text import Text
from game_logic import GameLogic

console = Console()

def show_welcome():
    console.print(Panel.fit(
        "[bold magenta]✨ Premium Number Guessing Game ✨[/bold magenta]\n"
        "[cyan]PythonとRichライブラリによる最高のエクスペリエンス[/cyan]",
        border_style="bright_blue"
    ))

def select_difficulty():
    table = Table(title="難易度を選択してください", show_header=True, header_style="bold cyan")
    table.add_column("Level", style="dim")
    table.add_column("Name", style="bold")
    table.add_column("Range", justify="right")
    
    table.add_row("1", "Easy", "1 - 10")
    table.add_row("2", "Medium", "1 - 50")
    table.add_row("3", "Hard", "1 - 100")
    
    console.print(table)
    
    choice = Prompt.ask("選択してください", choices=["1", "2", "3"], default="2")
    
    mapping = {"1": "easy", "2": "medium", "3": "hard"}
    return mapping[choice]

def start_game():
    show_welcome()
    difficulty = select_difficulty()
    game = GameLogic(difficulty)
    
    console.print(f"\n[bold green]Game Start![/bold green] 1から{game.range_max}の間の数字を当ててください。")
    
    while True:
        try:
            guess = IntPrompt.ask(f"予想を入力 (1-{game.range_max})")
            
            if guess < 1 or guess > game.range_max:
                console.print(f"[bold red]範囲外です！[/bold red] 1から{game.range_max}の間で入力してください。")
                continue
                
            result = game.check_guess(guess)
            
            if result == "Too low!":
                console.print("[yellow]👇 もっと大きいです！[/yellow]")
            elif result == "Too high!":
                console.print("[yellow]👆 もっと小さいです！[/yellow]")
            else:
                # Correct!
                console.print(f"\n[bold green]🎊 おめでとうございます！ 正解は {game.secret_number} でした！[/bold green]")
                console.print(f"[bold cyan]トータル試行回数: {game.attempts}[/bold cyan]")
                
                rank = game.get_rank()
                console.print(Panel(
                    f"[bold yellow]ランク: {rank}[/bold yellow]",
                    title="結果発表",
                    border_style="bright_yellow"
                ))
                break
        except Exception:
            console.print("[bold red]エラーが発生しました。[/bold red]")
            break

    if Prompt.ask("\nもう一度プレイしますか？", choices=["y", "n"], default="y") == "y":
        console.clear()
        start_game()
    else:
        console.print("[bold magenta]プレイしていただきありがとうございました！[/bold magenta] 👋")

if __name__ == "__main__":
    try:
        start_game()
    except KeyboardInterrupt:
        console.print("\n[bold red]ゲームを中断しました。[/bold red]")
        sys.exit(0)
