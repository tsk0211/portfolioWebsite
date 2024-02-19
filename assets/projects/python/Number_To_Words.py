def nsiw(number,start = '',end = '' ):
	n = str(number)
	ones = ['',' One',' Two',' Three',' Four',' Five',' Six',' Seven',' Eight',' Nine']
	tens = [' Ten',' Eleven',' Twelve',' Thirteen',' Fourteen',' Fifteen',' Sixteen',' Seventeen',' Eighteen',' Nineteen']
	decades = ['','',' Twenty',' Thirty',' Fourty',' Fifty',' Sixty',' Seventy',' Eighty',' Ninety']
	hundreds = ['',' One Hundred',' Two Hundred',' Three Hundred',' Four Hundred',' Five Hundred',' Six Hundred',' Seven Hundred',' Eight Hundred',' Nine Hundred']
	l = len(n)
	n1 = ''
	n2 = ''
	n3 = ''
	n4 = ''
	l1 = l
	l2 = l - 3
	l3 = l - 5    
	l4 = l - 7

	tv= str(start)
	lw = str(end)

	while l1 > 0:
		if n == 0:
			n1 = tv + "Zero" + lw
		elif l1 > 1 and n[l1 - 2] == '1':
			for i in range(0,10):
				if n[l1 - 1] == str(i):
					n1 = tens[i] + n1
		else:
			for i in range(0,10):
				if n[l1 - 1] == str(i):
					n1 = ones[i] + n1
		if l > 1:
			for i in range(0,10):
				if n[l1 - 2] == str(i):
					n1 = decades[i] + n1
		if l1 >2:
			for i in range(0,10):
				if n[l1 - 3] == str(i):
					n1 = hundreds[i] + n1
		l1 -= 9
		
		while l2 > 0:
			if l2 > 1 and n[l2 - 2] == '1':
				for i in range(0,10):
					if n[l2 - 1] == str(i):
						n2 = tens[i] + n2
			else:
				for i in range(0,10):
					if n[l2 - 1] == str(i):
						n2 = ones[i] + n2
			if l2 >1:
				for i in range(0,10):
					if n[l2 - 2] == str(i):
						n2 = decades[i] + n2
			l2 -= 9
		
		while l3 > 0:
			if l3 > 1 and n[l3 - 2] == '1':
				for i in range(0,10):
					if n[l3 - 1] == str(i):
						n3 = tens[i] + n3
			else:
			    for i in range(0,10):
			        if n[l3 - 1] == str(i):
			            n3 = ones[i] + n3
			if l3 > 1:
				for i in range(0,10):
					if n[l3 - 2] == str(i):
						n3 = decades[i] + n3
			l3 -= 9
		
		while l4 > 0:
			if l4 > 1 and n[l4 - 2] == '1':
				for i in range(0,10):
					if n[l4 - 1] == str(i):
						n4 = tens[i] + n4
			else:
				for i in range(0,10):
					if n[l4 - 1] == str(i):
						n4 = ones[i] + n4
			if l4 > 1:
				for i in range(0,10):
					if n[l4 - 2] == str(i):
						n4 = decades[i] + n4
			if l4 >2:
				for i in range(0,10):
					if n[l4 - 3] == str(i):
						n4 = hundreds[i] + n4
			l4 -= 9


	if n4 != '':
	    tv = tv + n4 + ' Crores'
	if n3 != '':
		tv = tv + n3 + ' Lacks'
	if n2 != '':
	    tv = tv + n2 + ' Thousand'
	if n1 != '':
	    tv = tv + n1 + lw
	return tv

print(nsiw(int(input("Enter Number :- "))))