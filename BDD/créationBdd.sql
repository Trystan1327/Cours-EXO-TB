USE hotel1;
CREATE TABLE Client (
adresse_client VARCHAR (50),
nom_client VARCHAR (50),
prenom_client VARCHAR(50),
num_client INT AUTO_INCREMENT NOT NULL,
PRIMARY KEY(num_client)
);
CREATE TABLE Station (
num_station INT AUTO_INCREMENT NOT NULL,
nom_station VARCHAR (50),
PRIMARY KEY (num_station)
);
CREATE TABLE Hotel (
capacite_hotel INT,
categorie_hotel VARCHAR (50),
nom_hotel VARCHAR (50),
adresse_hotel VARCHAR (50),
num_hotel INT AUTO_INCREMENT NOT NULL,
num_station INT,
PRIMARY KEY (num_hotel),
FOREIGN KEY (num_station)REFERENCES Station (num_station)
);
CREATE TABLE Chambre (
capacite_chambre INT,
degre_confort INT,
exposition VARCHAR (50),
type_chambre VARCHAR (50),
num_chambre INT AUTO_INCREMENT NOT NULL, 
num_hotel INT,
primary KEY (num_chambre),
FOREIGN KEY (num_hotel) REFERENCES Hotel (num_hotel)
);
CREATE TABLE Reservation (
num_chambre INT AUTO_INCREMENT NOT NULL,
num_client INT,
date_debut DATETIME,
date_fin DATETIME,
DATE_reservation DATETIME,
montant_arrhes INT,
prix_total INT,
PRIMARY KEY ( num_chambre, num_client),
FOREIGN KEY (num_chambre)REFERENCES Chambre(num_chambre),
FOREIGN KEY(num_client)REFERENCES CLIENT (num_client)
);
