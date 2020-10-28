SELECT cli_nom, hot_nom, res_date
FROM reservation
JOIN client
ON res_cli_id = cli_id
JOIN hotel
ON cli_id = hot_id;