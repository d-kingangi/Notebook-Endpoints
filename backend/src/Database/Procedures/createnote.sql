CREATE PROCEDURE createnote(
    @note_id VARCHAR(200), 
    @title VARCHAR(200),
    @content VARCHAR(200),
    @createdAt VARCHAR(200)
    )
AS
BEGIN 
    INSERT INTO notes(note_id, title, content, createdAt)
    VALUES(@note_id, @title, @content, @createdAt)
END