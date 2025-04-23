import sys
import pandas as pd
def analyze_csv(file_path):
    df = pd.read_csv(file_path)
    summary = df.describe().to_string()
    print(f"Data Summary:\n{summary}")
if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python analyze.py <input_file>")
        sys.exit(1)
    analyze_csv(sys.argv[1])