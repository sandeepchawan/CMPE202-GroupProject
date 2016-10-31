import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.awt.Color;

/**
 * Write a description of class Word here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Word extends Actor
{
   
    public Word(String text)
    {
        //value = val; // save menu option number
        setImage(new GreenfootImage(" " + text + " ", 15, Color.black, Color.yellow)); // create the button image
    }
    public void act() 
    {
        // Add your action code here.
    }    
}
