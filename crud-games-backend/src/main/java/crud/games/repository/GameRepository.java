package crud.games.repository;

import crud.games.model.Game;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.stream.Stream;

@Repository
public class GameRepository {

    private ArrayList<Game> gameList;

    public GameRepository(){
        gameList = new ArrayList<>();
        Game game1 = new Game("God of War", "",20,"Ação");
        Game game2 = new Game("Sleeping Dogs", "",75,"Ação");
            Game game3 = new Game("GTA IV", "",100,"Ação");
        Game game4 = new Game("GTA V", "",50,"Ação");
        gameList.add(game1);
        gameList.add(game2);
        gameList.add(game3);
        gameList.add(game4);
    }

    public ArrayList<Game> getAllGames(){
        return gameList;
    }

    public void save(Game g) {
        gameList.add(g);
    }

    public void delete(Game g){
        for(Game game : gameList){
            if(g.getTitle().equalsIgnoreCase(game.getTitle())){
                int index = gameList.indexOf(game);
                gameList.remove(index);
                return;
            }
        }
    }

    public void updateByTitle(Game g){
        for(Game game : gameList){
            if(g.getTitle().equalsIgnoreCase(game.getTitle())){
                int index = gameList.indexOf(game);
                gameList.get(index).setTitle(g.getNewTitle());
                gameList.get(index).setGenre(g.getGenre());
                gameList.get(index).setRating(g.getRating());
                return;
            }
        }
        return;
    }

    public void updateGame(Game g){
        g.setTitle(g.getNewTitle());
    }

}
