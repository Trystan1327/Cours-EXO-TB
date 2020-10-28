SELECT AVG(DATEDIFF(DAY, orderdate, shippeddate)) AS  ' Délai'
FROM orders
GROUP BY Délai


