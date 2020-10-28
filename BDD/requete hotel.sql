# Lot 1

#1 SELECT hot_nom, hot_ville FROM hotel;
#2 SELECT cli_nom, cli_prenom, cli_adresse,cli_ville FROM client WHERE cli_id = '4';
#3 SELECT sta_nom, sta_altitude FROM  station WHERE sta_altitude < 1000;
#4 SELECT cha_numero, cha_capacite FROM chambre WHERE cha_capacite = 1;
#5 SELECT cli_nom, cli_ville FROM client WHERE cli_ville <> 'Londre';
#6 SELECT hot_ville, hot_categorie, hot_nom FROM hotel WHERE hot_categorie > '3' AND hot_ville = 'Bretou';

# Lot 2 Afficher la liste des réservations avec le nom des clients Le résultat doit faire apparaître le nom du client,
# le nom de l’hôtel, la date de réservation

#7 SELECT  hot_nom, sta_nom, hot_categorie, hot_ville FROM hotel, station WHERE sta_id = hot_sta_id;
#8 SELECT hot_nom, hot_categorie, hot_ville, cha_numero FROM hotel, chambre WHERE  hot_id = cha_hot_id;
#9 select hot_nom, hot_categorie, hot_ville, cha_numero, cha_capacite FROM hotel, chambre WHERE cha_capacite > '1' AND hot_ville = 'Bretou';
SELECT cli_nom, hot_nom, res_date
FROM client, hotel, reservation 
WHERE 