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
    private static int x = 80;
    private int length;
    private Word[] wordActors;
    HashMap<String, Integer> hmap;
    private int key;
    private int unCompressedLength;
    private int compressedLength;

    public Sentence (int length) {

        GreenfootImage image = getImage() ;
        setImage("playnow.png");
        image.scale(50, 50);
        this.length = length;
        this.compressedLength = 0;
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
            x=80;
            updateUncompressedLength();
        }   
    }

    public void updateUncompressedLength() {
        unCompressedLength = 0;

        for (int i=0; i<words.length; i++) {

            unCompressedLength += wordActors[i].getText().length();

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

        if (Greenfoot.mouseClicked(this)) {
            System.out.println("Clicked on Sentence!");
            //add submit button to screen
            addSubmitButtonToWorld();
            prepare();
        }

    }    

    public void actOnWord(String text) {
        //Toggle for this word and similar words in the array
        for (int i=0; i<words.length; i++) {
            if (wordActors[i].getText() == text) {
                wordActors[i].toggle();
                System.out.println("Toggled word !!!");
            }
        }

        updateHashMap();
        calculateResult();

    }

    public void updateHashMap() {
        for (int i=0; i<words.length; i++) {

            if (wordActors[i].getSelected() == 1) {
                if (wordActors[i].getAddedToHashMap() == 0) {
                    //check if word already exists in hashmap, else add it to Hashmap
                    if (!checkWordExistsInHashmap(wordActors[i].getText())) {
                        addToHashMap(wordActors[i].getText());
                        wordActors[i].setAddedToHashMap(1);
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

        if (hmap.containsKey(text)) {
            System.out.println("Word " + text + " is already present in HashMap");
            return true;
        }
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
        //Check is word exists in hashmap, if yes add a 1 to the result, 
        // else add length of the string to the result
        compressedLength = 0;

        System.out.println("Calling calculate Result !!!");
        for (int i=0; i<words.length; i++) {
            if (checkWordExistsInHashmap(wordActors[i].getText())) {
                compressedLength += 1;
            } else {
                compressedLength += wordActors[i].getText().length();
            }
        }

        //Finally add up the string lengths in hashmap
        for (String key : hmap.keySet()) {
            if (key.length() > 0) {
                compressedLength += key.length() + 1; //Extra +1 is for the integer associated with the string
            }
        }

    }

    public int getCompressedLength() {
        return compressedLength;
    }

    public int getUncompressedLength() {
        return unCompressedLength;
    }

    public void addSubmitButtonToWorld() {
        //  ((CompressionWorld) getWorld()).addObject(result, 351, 391);
        ((CompressionWorld)getWorld()).addObject(((CompressionWorld)getWorld()).getResult(), 351, 391);
    }

}
