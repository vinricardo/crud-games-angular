package crud.games.model;

public class Game {
    private String title;
    private String newTitle;
    private int rating;
    private String genre;


    public Game(String title, String newTitle, int rating, String genre) {
        this.title = title;
        this.newTitle = newTitle;
        this.rating = rating;
        this.genre = genre;
    }

    public Game(){
        super();
    }

    public String getNewTitle() {
        return newTitle;
    }

    public void setNewTitle(String newTitle) {
        this.newTitle = newTitle;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }
}
