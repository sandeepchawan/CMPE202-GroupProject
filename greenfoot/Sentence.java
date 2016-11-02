import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.awt.Color;
import java.util.HashMap;
import java.util.Map;
import java.util.Iterator;
import java.util.Set;

/**
 * Write a description of class Sentence here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Sentence extends Actor
{

    private String[] words;
    CompressionWorld cWorld;
    private static int x = 40;
    private int length;
    private Word[] wordActors;
    HashMap<Integer, String> hmap;

    public Sentence (int length) {
        
        GreenfootImage image = getImage() ;
        setImage("buttonPlay.png");
        image.scale(50, 50);
        this.length = length;
        hmap = new HashMap<Integer, String>();
    }

    public void prepare () {
        cWorld = (CompressionWorld)getWorld();
        words = new String[length];
        wordActors = new Word[length];
        if(length > 0) {
            for (int i=0; i<length; i++) {
                words[i] = "sample";
                Word wordActor = new Word(words[i]);
                if (wordActor == null) {
                    System.out.println("Invalid Word Actor");
                    return;
                }
                wordActors[i] = wordActor;
                cWorld.addObject(wordActor, x, 200);
                x += 80;
            }
             x=40;
        }   
    }
    
    public void addWord (String word, int pos) {
       
        if (pos < words.length) {
            words[pos] = word;
        }
        return;
    }

    public void displayWord(String label) {
    //    CompressionWorld cWorld = (CompressionWorld) getWorld();
//        Text word = new Text(label, Color.YELLOW, Color.BLACK);
     //   cWorld.addObject(word, 100, 100);
    }

    public void act() 
    {
        // Add your action code here.
        
        //displayWord("Test");
        if (Greenfoot.mouseClicked(this)) {
            System.out.println("Clicked on Sentence!");
            prepare();
        }
        /*  for (int i=0; i<words.length; i++) {
        displayWord(words[i]);
        } */
    }    
    
    public void actOnWord(String text) {
        //Toggle all words, and if word is set, change color, else dont
        for (int i=0; i<words.length; i++) {
            if (wordActors[i].getText() == text) {
                wordActors[i].toggle();
            }
        }
        
    }
    
    public void addToHashMap(String text) {
        //check if element not alraedy present
    }
    
    public void removeFromHashMap(String text) {
        //check if it exists before removing
    }
    
    public void calculateResult() {
        
    }
}
