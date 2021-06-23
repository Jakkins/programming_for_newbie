import tkinter as tk

class label:
    def __init__(self, parent, text):
        w = tk.Label(parent, text=text)
        w.pack()
