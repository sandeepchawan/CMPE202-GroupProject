import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.awt.Color;

public class CompressionWorld extends World
{
    private String[] words;
    private static int x = 30;
    int length = 5;
    private Sentence sentence;
    private Result result;

    public CompressionWorld()
    {    
        // Create a new world with 600x400 cells with a cell size of 1x1 pixels.
        super(800, 600, 1); 
  
       // this.setBackground(new GreenfootImage("greyBG.jpg"));
        prepare();
    }

    /**
     * Prepare the world for the start of the program. That is: create the initial
     * objects and add them to the world.
     */
    private void prepare()
    {
        sentence = new Sentence(9);
        addObject(sentence, 351, 71);
        
        result = new Result();
        //addObject(result, 351, 391);

    }
    
    public Sentence getSentence() {
        return sentence;
    }
    
    public Result getResult() {
        return result;
    }

}
