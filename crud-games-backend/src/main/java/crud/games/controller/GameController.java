package crud.games.controller;

import crud.games.model.Game;
import crud.games.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class GameController {


    @Autowired
    private GameRepository gameRepository;

    @GetMapping(value = "/games")
    public ArrayList<Game> getGame(){
        return gameRepository.getAllGames();
    }

    @PostMapping(value = "/games")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Game createGame(@RequestBody Game game){
        gameRepository.save(game);
        return game;
    }

    @PutMapping(value = "/deletar/games")
    @ResponseStatus(code = HttpStatus.OK)
    public void deleteGame(@RequestBody Game game){
        gameRepository.delete(game);
    }

    @PutMapping("/games")
    public void updateGame(@RequestBody Game game){
        gameRepository.updateByTitle(game);
    }

}
