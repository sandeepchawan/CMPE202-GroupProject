import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.awt.Color;

/**
 * Write a description of class Sentence here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Sentence extends Actor
{

    private String[] words;
    CompressionWorld cWorld = (CompressionWorld) getWorld();
    private static int x = 10;

    public Sentence (int length) {
        //GreenfootImage image = getImage() ;
        //image.scale( 50, 50 ); 
        words = new String[length];
        if(length > 0) {
            for (int i=0; i<length; i++) {
                words[i] = "sample";
                cWorld.addObject(new Word(words[i]), x, 10);
                x += 10;
            }
            
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
        displayWord("Test");
        if (Greenfoot.mouseClicked(this)) {
            System.out.println("Clicked on Sentence!");
        }
        /*  for (int i=0; i<words.length; i++) {
        displayWord(words[i]);
        } */
    }    
}
