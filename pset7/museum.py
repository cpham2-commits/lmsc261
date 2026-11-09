from datetime import date

import requests
import json

headers = {
    "AIC-User-Agent" : "museum-crawler (cpham2@berklee.edu)",
    "User-Agent" : "museum-crawler (cpham2@berklee.edu)",
} 

search_term = input("Enter the search term: ")
params = { 
	'q' : search_term, 
	'fields' : "title,artist_display,date_display"
}

min_year = int(input("Enter the minimum year: "))
max_year = int(input("Enter the maximum year: "))

response = requests.get("https://api.artic.edu/api/v1/artworks/search?", params=params, headers=headers)

def format_and_print(data, min_year, max_year): 
  art_data = data['data']
  for d in art_data:
      date = d['date_display'][:4]
      if date.isdigit():
          art_year = int(date)
      else:
          continue
      if min_year <= art_year <= max_year:
          print(f"{d['title']} by {d['artist_display']} ({art_year})")
format_and_print(response.json(), min_year, max_year)
