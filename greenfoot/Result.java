import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.awt.Color;
import java.awt.*;
/**
 * Write a description of class Result here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Result extends Actor
{
    private int unCompressedLength;
    private int compressedLength;
    private int percentage;
    CompressionWorld cWorld;
    Text text;

    public Result()
    {
        GreenfootImage image = getImage() ;
        setImage("buttonSubmit5.jpg");
        image.scale(20, 20);
        percentage = 0;
        compressedLength = 0;
        unCompressedLength = 0;
    }

     public void act() 
    {
        if (Greenfoot.mouseClicked(this)) {
            System.out.println("Clicked on Submit!");
            unCompressedLength = ((CompressionWorld)getWorld()).getSentence().getUncompressedLength();
            compressedLength = ((CompressionWorld)getWorld()).getSentence().getCompressedLength();
            if (compressedLength ==0) {
                compressedLength = unCompressedLength;
            }
            if (unCompressedLength > 0) {
            percentage = Math.abs(compressedLength - unCompressedLength)*100/unCompressedLength;
            clearResult();
            displayResult();
            }
        }
    }    
    
    public void displayResult() {
        //Add objects on screen to display results
        CompressionWorld cWorld = (CompressionWorld) getWorld();
        text = new Text("Original length of the String is: " + unCompressedLength +
                        "\n  String length after compression is: " + compressedLength +
                        "\n  Percentage compression achieved is: " + percentage,
                   Color.BLACK, Color.WHITE);
        cWorld.addObject(text, 250, 500);
    }
    
     public void clearResult() {
        if (text != null) {
            ((CompressionWorld)getWorld()).removeObject(text);
            text = null;
        }
    }
}
