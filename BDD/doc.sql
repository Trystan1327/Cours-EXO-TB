#SELECT numcom
#FROM entcom
#WHERE numfou = 09120

#SELECT numfou, obscom 
#FROM entcom
#WHERE datcom 

#SELECT  COUNT(entcom.numfou), COUNT(numcom)
# FROM entcom 
#WHERE numcom

#SELECT codart, libart, stkale, stkphy, qteann 
#FROM produit
#WHERE stkphy <= stkale AND qteann <= 1000

SELECT posfou, nomfou
FROM fournis
WHERE posfou LIKE '75%' OR posfou LIKE '78%' OR posfou LIKE '92%' OR posfou LIKE '77'
ORDER BY posfou ASC, nomfou desc

