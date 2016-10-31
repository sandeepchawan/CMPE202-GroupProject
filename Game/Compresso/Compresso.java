import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class MyWorld here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Compresso extends World
{

    /**
     * Constructor for objects of class MyWorld.
     * 
     */
    
    
    public Compresso()
    {    
        // Create a new world with 800x600 cells with a cell size of 1x1 pixels.
        super(800, 600, 1); 
        prepare();
    }
    
    private void prepare(){
        CompressionBox box = new CompressionBox();
        addObject(box, 400,420);
        GreenfootImage text = new GreenfootImage("This is the string to be compressed by player", 29, null, null);
        getBackground().drawImage(text, 100, 130);
    }
}
