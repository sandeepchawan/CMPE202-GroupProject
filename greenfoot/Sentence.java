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
    HashMap<String, Integer> hmap;
    private int key;

    public Sentence (int length) {

        GreenfootImage image = getImage() ;
        setImage("buttonPlay.png");
        image.scale(50, 50);
        this.length = length;
        this.key = 1;
        hmap = new HashMap<String, Integer>();
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
        //Toggle for this word and similar words in the array
        for (int i=0; i<words.length; i++) {
            if (wordActors[i].getText() == text) {
                wordActors[i].toggle();
                System.out.println("Toggled word !!!");
                //wordActors[i] = word;
                // if (word.getSelected() == 1) {
                // updateSimilarInSentence(wordActors[i].getText(), 1);
                // } else {
                // updateSimilarInSentence(wordActors[i].getText(), 0);
                // }
                // return;
            }
        }

        updateHashMap();

    }

    public void updateHashMap() {
        for (int i=0; i<words.length; i++) {

            if (wordActors[i].getSelected() == 1) {
                if (wordActors[i].getAddedToHashMap() == 0) {
                    //check if word already exists in hashmap, else add it to Hashmap
                    if (!checkWordExistsInHashmap(wordActors[i].getText())) {
                        addToHashMap(wordActors[i].getText());
                        wordActors[i].setAddedToHashMap(1);
                        //Update entire sentence containing this word
                        // updateSimilarInHashMap(wordActors[i].getText(), 1);
                    } else {
                        wordActors[i].setAddedToHashMap(1);
                    }

                }

            }

            if (wordActors[i].getSelected() == 0) {
                if (wordActors[i].getAddedToHashMap() == 1) {
                    //check if word exists in hashmap, and then remove From Hashmap
                    if (checkWordExistsInHashmap(wordActors[i].getText())) {
                        removeFromHashMap(wordActors[i].getText());
                        wordActors[i].setAddedToHashMap(0);
                        //Update entire sentence containing this word
                       // updateSimilarInHashMap(wordActors[i].getText(), 0);
                    } else {
                        wordActors[i].setAddedToHashMap(0);
                    }

                }
            }
        }
    }

    public void addToHashMap(String text) {
        System.out.println("Value of key is: " + key);
        hmap.put(text , key);
        key++;
    }

    public void removeFromHashMap(String text) {
        hmap.remove(text);
    }

    public boolean checkWordExistsInHashmap (String text) {
        // for (String value: hmap.values()) {
        //            if (value.contains(text)) {
        if (hmap.containsKey(text)) {
            System.out.println("Word " + text + " is already present in HashMap");
            return true;
        }
        //  }
        System.out.println("Word " + text + " is not present in HashMap");

        return false;
    }

    public void updateSimilarInSentence(String text, int value) {
        for (int i=0; i<words.length; i++) {
            if (wordActors[i].getText() == text) {
                wordActors[i].setSelected(value);
            }
        }

    }

    public void updateSimilarInHashMap(String text, int value) {
        for (int i=0; i<words.length; i++) {
            if (wordActors[i].getText() == text) {
                wordActors[i].setAddedToHashMap(value);
            }
        }
    }

    public void calculateResult() {

    }
}