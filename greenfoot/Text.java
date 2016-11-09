import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.awt.Color;

/**
 * Write a description of class Text here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Text extends Actor
{

    public Text(String text) {
        setImage(new GreenfootImage(text, 24, Color.BLACK, Color.WHITE)); 
    }

    public Text(String text, Color fgcolor, Color bgcolor) {
        setImage(new GreenfootImage(text, 24, fgcolor, bgcolor)); 
    }

    public void act() 
    {

    }    
}
