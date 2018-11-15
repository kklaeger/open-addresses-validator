-- Create the final table that should only contain necessary information
CREATE TABLE IF NOT EXISTS addresses_final(
	streetNumber STRING,
	street STRING,
	city STRING,
	postcode STRING) 
PARTITIONED BY (country STRING)
STORED AS ORC
LOCATION '/user/hadoop/openaddresses/final'
TBLPROPERTIES ('transactional'='true');
