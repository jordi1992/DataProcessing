import csv

f = open('data.csv', 'r')
try:
	reader = csv.reader(f)
	date = []
	temp = []
	for row in reader:
		iets = row[0]	
		date.append(iets[0:4] + '/' + iets[4:6] + '/' + iets[6:8])
		temp.append(int(row[1]) / 10.0)
finally:
	f.close()

f = open('weer.csv', 'wb')
try:
	writer = csv.writer(f)
	for i in range(len(date)):
		writer.writerow((date[i], temp[i]))
finally:
	f.close()
