import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.util.*;
/**
 * Write a description of class CompressionBox here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class CompressionBox extends Actor
{
    /**
     * Act - do whatever the CompressionBox wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    public CompressionBox(){
        GreenfootImage image = getImage() ;
        image.scale( 150, 180 ) ;
    }
    Map<String,Integer> pin = new HashMap<String, Integer>();
    public void act(String name, Integer position) 
    {
        // Add your action code here.
   
       pin.put(name, position);
     }
    
}
