CREATE PROCEDURE updatenote(
    @note_id VARCHAR(200),
    @title VARCHAR(200), 
    @content VARCHAR(200),
    @createdAt VARCHAR(200))
AS
BEGIN
    UPDATE notes SET 
        title=@title, 
        content=@content, 
        createdAt=@createdAt
    WHERE note_id = @note_id
END