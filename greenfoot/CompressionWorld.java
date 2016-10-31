import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.awt.Color;

public class CompressionWorld extends World
{
    private String[] words;
    private static int x = 30;
    int length = 5;

    public CompressionWorld()
    {    
        // Create a new world with 600x400 cells with a cell size of 1x1 pixels.
        super(800, 600, 1); 
        prepare();
    }

    /**
     * Prepare the world for the start of the program. That is: create the initial
     * objects and add them to the world.
     */
    private void prepare()
    {
        //sentence = new Sentence(5);
        //addObject(sentence, 20, 10);
        
        words = new String[length];
        if(length > 0) {
            for (int i=0; i<length; i++) {
                words[i] = "sample";
                addObject(new Word(words[i]), x, 10);
                x += 60;
            }
             x=10;
        }   

    }

}
