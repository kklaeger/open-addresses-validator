-- Create the final table that should only contain necessary information
CREATE TABLE IF NOT EXISTS addresses_final(
	streetNumber STRING,
	street STRING,
	city STRING,
	postcode STRING) 
PARTITIONED BY (country STRING)
STORED AS ORC
LOCATION 'hdfs://localhost:9000/user/hadoop/openaddresses/final'
TBLPROPERTIES ('transactional'='true');

-- Insert necessary columns from raw to final
INSERT overwrite TABLE addresses_final partition(country)
SELECT streetNumber, street, city, postcode, country FROM addresses_raw;

-- Delete unneccessary rows from the final table
DELETE FROM addresses_final WHERE streetNumber="NUMBER" AND street="STREET" AND city="CITY" AND postcode="POSTCODE";
