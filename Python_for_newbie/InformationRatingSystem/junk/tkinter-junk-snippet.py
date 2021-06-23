import tkinter as tk
from tkinter import scrolledtext

root = tk.Tk()
root.minsize(width=300, height=300)

# --- this works
root.update()
a = root.winfo_width() # 1366
b = root.winfo_height() # 744
# --- end
c = root.winfo_screenwidth() # 3286
d = root.winfo_screenheight() # 1080
# root.geometry(f'{c}x{d}')
# print(a, b, c, d)

# -------------------------
text_area = scrolledtext.ScrolledText(root,
                          wrap = tk.WORD,
                          font = ("Times New Roman",12))

text_area.grid(column = 0, pady = 10, padx = 10)
# Inserting Text which is read only
text_area.insert(tk.INSERT, "ciao")
# Making the text read only
text_area.configure(state ='disabled')
# --------------------------




'''
canvas = tk.Canvas(root)
canvas.pack(side=tk.LEFT)

scrollbar = tk.Scrollbar(root, command=canvas.yview)
scrollbar.pack(side=tk.LEFT, fill='y')

canvas.configure(yscrollcommand = scrollbar.set)

# --- put frame in canvas ---
frame = tk.Frame(canvas)
canvas.create_window((0,0), window=frame, anchor='nw')

# --- add widgets in frame ---
tk.Label(frame, text=all_text).pack()

'''
