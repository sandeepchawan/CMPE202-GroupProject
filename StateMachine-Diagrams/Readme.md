This State Machine Diagram shows the states of the compressionBox object.
A compression box in our project is checker box which typically checks the validity of a substring for compression.
Validity refers to the ability of substring provided to the box to help in string compression.
The compression box initially waits for substring to be put into it.
When a substring is dragged in it, it goes to the hasSubstring State where it checks for the validity.
It again returns to the waiting state when the processing is done.
