-- Create MySQL table that is used by the end-user-app
CREATE TABLE IF NOT EXISTS addresses (
    streetNumber VARCHAR(255),
    street VARCHAR(255),
    city VARCHAR(255),
    postcode VARCHAR(255)
);
