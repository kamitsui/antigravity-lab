import random

class GameLogic:
    def __init__(self, difficulty='medium'):
        self.difficulty = difficulty
        self.range_max = self._set_range()
        self.secret_number = random.randint(1, self.range_max)
        self.attempts = 0

    def _set_range(self):
        if self.difficulty == 'easy':
            return 10
        elif self.difficulty == 'hard':
            return 100
        else: # medium
            return 50

    def check_guess(self, guess):
        self.attempts += 1
        if guess < self.secret_number:
            return "Too low!"
        elif guess > self.secret_number:
            return "Too high!"
        else:
            return "Correct!"

    def get_rank(self):
        if self.attempts <= 3:
            return "S (Master Mind 🧠)"
        elif self.attempts <= 6:
            return "A (Great Guessing 🌟)"
        elif self.attempts <= 10:
            return "B (Good Job 👍)"
        else:
            return "C (Better luck next time 🧊)"
