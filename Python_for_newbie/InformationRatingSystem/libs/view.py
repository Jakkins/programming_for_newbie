import tkinter as tk
import sys, os
# work ---> sys.path.append("/home/sam/Desktop/Python/Bho/")
# do NOT work ---> sys.path.append("~/Desktop/Python/Bho/")
path = os.path.abspath(os.path.join(os.path.dirname( __file__ ), '..'))
sys.path.append(path)
import libs.JLabel as JLabel

root = tk.Tk()

JLabel.label(root, "ciao")

root.mainloop()
