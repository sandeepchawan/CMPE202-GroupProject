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
   
    int selected;
    CompressionWorld cWorld;
    Sentence sentence;
    String text;
    int addedToHashMap;

    public Word(String text)
    {
        //value = val; // save menu option number
        this.text = text;
        this.selected = 0;
        this.addedToHashMap = 0;
        setImage(new GreenfootImage(" " + text + " ", 20, Color.white, Color.green)); // create the text
    }
    
    public void act() 
    {
      
        cWorld = (CompressionWorld) getWorld();
        sentence = cWorld.getSentence();
        if (Greenfoot.mouseClicked(this)) {
            sentence.actOnWord(text);
        }
       
            
        }

    
    public void toggle() {
        
        if (this.selected == 0) {
            this.selected = 1;
            setImage(new GreenfootImage(" " + text + " ", 20, Color.white, Color.red));
            System.out.println("Color changed to red for word: "+ text);
            
        } else {
            this.selected = 0;
            System.out.println("Color changed to green for word: "+ text);
            setImage(new GreenfootImage(" " + text + " ", 20, Color.white, Color.green));
        }
    }
    
    public String getText() {
        return text;
    }
    
    public int getSelected() {
        return selected;
    }

     public int getAddedToHashMap() {
        return addedToHashMap;
    }
    
    public void setSelected(int value) {
        this.selected = value;
    }
    
    public void setAddedToHashMap(int value){
        this.addedToHashMap = value;
    }
}
