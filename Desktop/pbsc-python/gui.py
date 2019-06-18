from tkinter import *
import sys


class MyFirstGui:
    def __init__(self, master):
        self.master = master
        master.title("A simple GUI")
        self.label = Label(master, text="this is our first gui")
        self.label.pack()

        self.greet_button = Button(master, text="Greet", command=self.greet)
        self.greet_button.pack()

        self.close_button = Button(
            master, text="Close", command=self.quit_and_close)
        self.close_button.pack()

    def greet(self):
        print("Greetings")

    def quit_and_close(self):
        self.quit()
        sys.exit()


root = Tk()
my_gui = MyFirstGui(root)
root.mainloop()
