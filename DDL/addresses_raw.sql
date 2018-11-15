-- Create the raw table that contains the entire information of the .csv files
CREATE EXTERNAL TABLE IF NOT EXISTS addresses_raw(
	lon DOUBLE,
	lat DOUBLE,
	streetNumber STRING,
	street STRING,
	unit STRING,
	city STRING,
	district STRING,
	region STRING,
	postcode STRING,
	id STRING,
	hash STRING) 
PARTITIONED BY (country STRING)
ROW FORMAT DELIMITED FIELDS TERMINATED BY ','
LOCATION '/user/hadoop/openaddresses/raw';

