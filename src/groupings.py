import pandas as pd
import os
import sys
sys.stdout.reconfigure(encoding='utf-8') # type: ignore


def generate_groupings(election_name):
    states = pd.read_csv(os.path.join(os.path.pardir, election_name, "constituencies.csv"))
    states["constituency_formatted"] = states["Constituency"].apply(lambda constituency: constituency.replace("—", "--"))
    print(states["constituency_formatted"])
    

if __name__ == "__main__":
    generate_groupings("2025_Canada")