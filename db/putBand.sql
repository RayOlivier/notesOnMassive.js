UPDATE bands 
SET year_formed = $1
WHERE id = $2;
-- check your where clause in pgweb

SELECT *
FROM bands
ORDER BY id;