import sys
from urllib.parse import quote

for line in sys.stdin:
    print(quote(line.rstrip()))
