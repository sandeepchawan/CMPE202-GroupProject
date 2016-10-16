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
        addObject(box, 420,500);
    }
}
