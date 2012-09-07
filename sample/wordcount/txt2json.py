import json

with open('pg1322.txt') as fh:
	buff = ""
	title = None
	for line in fh.readlines():
		if line.strip() == '':
			continue
		if line[0] == ' ':
			buff = buff + line
		else:
			if buff.strip() != '':
				print json.dumps({'title': title, 'text': buff})
			title = line.strip()
			buff = ''
