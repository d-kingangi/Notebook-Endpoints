CREATE OR ALTER PROCEDURE deletenote(@note_id VARCHAR(200))
AS
BEGIN
    DELETE FROM notes
    WHERE note_id = @note_id;
END