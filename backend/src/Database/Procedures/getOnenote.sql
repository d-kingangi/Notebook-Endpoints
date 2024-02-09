CREATE OR ALTER PROCEDURE getOnenote(@note_id VARCHAR(100))
AS
BEGIN   
    SELECT * FROM note WHERE note_id = @note_id
END

SELECT * FROM notes