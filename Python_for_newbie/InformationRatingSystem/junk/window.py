import tkinter as tk
# var inside tk:
#   LEFT
#   BOTH
from tkinter import *

# window = root = visible on monitor
root = tk.Tk()
root.update()

# create a main-frame
main_frame = Frame(root)
main_frame.pack(fill=BOTH, expand=1)

# canvas for lulz
mycanvas = Canvas(main_frame)
mycanvas.pack(side=LEFT, fill=BOTH, expand=1)

# scrollbar
scrollbar = Scrollbar(root, orient=VERTICAL, command=mycanvas.yview)
scrollbar.pack(side=RIGHT, fill=Y) # fill=Y axis

# configure canvas
mycanvas.configure(yscrollcommand=scrollbar.set)
mycanvas.bind('Configure>', lambda e: mycanvas.configure(scrollregion=mycanvas.bbox("all")))

# second frame
second_frame = Frame(mycanvas)
mycanvas.create_window((0,0), window=second_frame, anchor="nw") # nw = nord-west

# insert something

label = Label( second_frame, text="ciaoooooo", relief=RAISED )
label.pack()

# --- start program ---
root = tk.mainloop()
