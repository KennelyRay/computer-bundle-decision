# Computer Bundle Purchase Decision
# Compare bundle price difference to determine whether to buy or not

import tkinter as tk
from tkinter import ttk, messagebox

def make_purchase_decision(computer_bundle_price, per_part_bundle_price):
    """
    Determine whether to buy based on price difference
    
    Args:
        computer_bundle_price (float): Price of the computer bundle
        per_part_bundle_price (float): Price of buying parts separately
    
    Returns:
        str: Decision message
    """
    price_difference = computer_bundle_price - per_part_bundle_price
    
    if price_difference >= 3000:
        return f"Don't buy! Price difference is ₱{price_difference:,.2f}, which is >= ₱3,000"
    elif price_difference <= 2999:
        return f"Buy it! Price difference is ₱{price_difference:,.2f}, which is <= ₱2,999"

class ComputerBundleApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Computer Bundle Purchase Decision")
        self.root.geometry("500x400")
        self.root.configure(bg='#f0f0f0')
        
        # Main frame
        main_frame = ttk.Frame(root, padding="20")
        main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        # Title
        title_label = ttk.Label(main_frame, text="Computer Bundle Purchase Decision", 
                               font=('Arial', 16, 'bold'))
        title_label.grid(row=0, column=0, columnspan=2, pady=(0, 20))
        
        # Computer bundle price input
        ttk.Label(main_frame, text="Computer Bundle Price (₱):", 
                 font=('Arial', 12)).grid(row=1, column=0, sticky=tk.W, pady=5)
        self.computer_price_var = tk.StringVar()
        computer_entry = ttk.Entry(main_frame, textvariable=self.computer_price_var, 
                                  font=('Arial', 12), width=20)
        computer_entry.grid(row=1, column=1, sticky=(tk.W, tk.E), pady=5, padx=(10, 0))
        
        # Per part bundle price input
        ttk.Label(main_frame, text="Per Part Bundle Price (₱):", 
                 font=('Arial', 12)).grid(row=2, column=0, sticky=tk.W, pady=5)
        self.parts_price_var = tk.StringVar()
        parts_entry = ttk.Entry(main_frame, textvariable=self.parts_price_var, 
                               font=('Arial', 12), width=20)
        parts_entry.grid(row=2, column=1, sticky=(tk.W, tk.E), pady=5, padx=(10, 0))
        
        # Calculate button
        calculate_btn = ttk.Button(main_frame, text="Check Purchase Decision", 
                                  command=self.calculate_decision)
        calculate_btn.grid(row=3, column=0, columnspan=2, pady=20)
        
        # Result display
        self.result_text = tk.Text(main_frame, height=8, width=50, 
                                  font=('Arial', 11), wrap=tk.WORD)
        self.result_text.grid(row=4, column=0, columnspan=2, pady=10)
        
        # Scrollbar for result text
        scrollbar = ttk.Scrollbar(main_frame, orient="vertical", command=self.result_text.yview)
        scrollbar.grid(row=4, column=2, sticky=(tk.N, tk.S))
        self.result_text.configure(yscrollcommand=scrollbar.set)
        
        # Clear button
        clear_btn = ttk.Button(main_frame, text="Clear", command=self.clear_fields)
        clear_btn.grid(row=5, column=0, columnspan=2, pady=10)
        
        # Configure grid weights
        root.columnconfigure(0, weight=1)
        root.rowconfigure(0, weight=1)
        main_frame.columnconfigure(1, weight=1)
    
    def calculate_decision(self):
        try:
            computer_price = float(self.computer_price_var.get())
            parts_price = float(self.parts_price_var.get())
            
            if computer_price < 0 or parts_price < 0:
                messagebox.showerror("Error", "Prices cannot be negative!")
                return
            
            decision = make_purchase_decision(computer_price, parts_price)
            price_difference = computer_price - parts_price
            
            result = f"Computer Bundle Price: ₱{computer_price:,.2f}\n"
            result += f"Per Part Bundle Price: ₱{parts_price:,.2f}\n"
            result += f"Price Difference: ₱{price_difference:,.2f}\n\n"
            result += f"Decision: {decision}\n\n"
            
            if price_difference >= 3000:
                result += "Recommendation: Don't buy the bundle. The price difference is too high (≥ ₱3,000).\n"
                result += "Consider buying parts separately to save money."
            else:
                result += "Recommendation: Go ahead and buy the bundle! The price difference is acceptable (≤ ₱2,999).\n"
                result += "The convenience of a bundle might be worth the small premium."
            
            self.result_text.delete(1.0, tk.END)
            self.result_text.insert(1.0, result)
            
        except ValueError:
            messagebox.showerror("Error", "Please enter valid numbers for both prices!")
    
    def clear_fields(self):
        self.computer_price_var.set("")
        self.parts_price_var.set("")
        self.result_text.delete(1.0, tk.END)

# Example usage and GUI launch
if __name__ == "__main__":
    # Console examples with PHP currency
    print("=== Console Examples ===")
    print("Example 1: High price difference - don't buy")
    computer_price_1 = 80000
    parts_price_1 = 50000
    print(f"Computer bundle: ₱{computer_price_1:,}")
    print(f"Per part bundle: ₱{parts_price_1:,}")
    print(make_purchase_decision(computer_price_1, parts_price_1))
    print()
    
    print("Example 2: Low price difference - buy")
    computer_price_2 = 60000
    parts_price_2 = 58000
    print(f"Computer bundle: ₱{computer_price_2:,}")
    print(f"Per part bundle: ₱{parts_price_2:,}")
    print(make_purchase_decision(computer_price_2, parts_price_2))
    print()
    
    # Launch GUI application
    print("Launching GUI application...")
    root = tk.Tk()
    app = ComputerBundleApp(root)
    root.mainloop()