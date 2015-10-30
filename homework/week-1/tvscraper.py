#!/usr/bin/env python
# Name: Jordi Jonkergouw
# Student number: 11083603
'''
This script scrapes IMDB and outputs a CSV file with highest ranking tv series.
'''
# IF YOU WANT TO TEST YOUR ATTEMPT, RUN THE test-tvscraper.py SCRIPT.
import csv

from pattern.web import URL, DOM

TARGET_URL = "http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series"
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'

def extract_tvseries(dom):

    url = URL(TARGET_URL)
    dom = DOM(url.download(cached=True))
    #print dom.body.content
    x = 0
    csv_row = []
    for series in dom.by_tag('td.title'):    
        title = series.by_tag('a')[0].content.encode('ascii', 'ignore')
        ranking = series.by_tag('span.value')[0].content.encode('ascii', 'ignore')
        genres = series.by_tag('span.genre')[0].by_tag('a')
        genres = [g.content.encode('ascii', 'ignore') for g in genres]
        actors = series.by_tag('span.credit')[0].by_tag('a')
        actors = [a.content.encode('ascii', 'ignore') for a in actors]
        x = x + 1
        try:
            runtime = series.by_tag('span.runtime')[0].content.encode('ascii', 'ignore')
        except:
            runtime = "Unknown"
        #print x, title, ranking, genres, actors, runtime

        csv_titles = title
        csv_ranking = ranking
        csv_genres = genres
        csv_actors = actors
        csv_runtime = runtime
        row = [csv_titles, csv_ranking, csv_genres, csv_actors, csv_runtime]
        csv_row.append(row)

    return csv_row

def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest ranking TV-series.
    '''
    writer = csv.writer(f)
    writer.writerow(['Title', 'Ranking', 'Genre', 'Actors', 'Runtime'])
    for row in tvseries:
        writer.writerow(row)
    # ADD SOME CODE OF YOURSELF HERE TO WRITE THE TV-SERIES TO DISK

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in testing / grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)