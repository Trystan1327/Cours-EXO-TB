
SELECT MONTH(orderdate) AS 'Mois 97', SUM(unitprice*quantity) AS 'Montant_Ventes_97'
FROM order_details
JOIN orders
ON order_details.OrderID = orders.OrderID
WHERE YEAR(orderdate) = '1997%' 
GROUP BY MONTH(orderdate)
