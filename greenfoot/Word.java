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
   
    int selected = 0;
    CompressionWorld cWorld;
    Sentence sentence;
    String text;

    public Word(String text)
    {
        //value = val; // save menu option number
        this.text = text;
        this.selected = 0;
        setImage(new GreenfootImage(" " + text + " ", 20, Color.white, Color.green)); // create the text
    }
    
    public void act() 
    {
        //GreenfootImage image = getImage();
        cWorld = (CompressionWorld) getWorld();
        sentence = cWorld.getSentence();
        if (Greenfoot.mouseClicked(this)) {
            sentence.actOnWord(text);
        }
        // if (Greenfoot.mouseClicked(this)) {
            // System.out.println("clicked on word "+ text);
            // if (this.selected == 0) {
            // this.selected = 1; 
            // //setImage(new GreenfootImage(" " + text + " ", 20, Color.white, Color.red));
            // System.out.println("Color changed to red for word: "+ text);
            // //change background color? or update all after every single click?
        // } else {
            // this.selected = 0;
            // System.out.println("Color changed to green for word: "+ text);
           // // setImage(new GreenfootImage(" " + text + " ", 20, Color.white, Color.green));
        // }
            //change background color?
            
        }

    
    public void toggle() {
        
        if (this.selected == 0) {
            this.selected = 1;
            setImage(new GreenfootImage(" " + text + " ", 20, Color.white, Color.red));
            System.out.println("Color changed to red for word: "+ text);
            //change background color? or update all after every single click?
        } else {
            this.selected = 0;
            System.out.println("Color changed to green for word: "+ text);
            setImage(new GreenfootImage(" " + text + " ", 20, Color.white, Color.green));
        }
    }
    
    public String getText() {
        return text;
    }
}
