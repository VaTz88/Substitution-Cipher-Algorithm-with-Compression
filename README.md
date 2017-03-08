# Substitution Cipher Algorithm with Compression

### Abstract

Substitution cipher is a method of encryption by which units of plaintext are replaced with ciphertext, according to a fixed dictionary. The "units" will be single letters. The receiver decrypts the text by performing the inverse substitution according to the dictionary. Here the algorithm is modified to do data encryption along with data compression by assigning ciphertext to every word instead of a single character. Dictionary is generated dynamically as the algorithm encounters new words.

### Algorithm

Algorithm takes plaintext as input. Input will be encrypted and compressed and a key will be generated.

###### Pseudocode for enycryption:

    INPUT text
    LOOP each word in text
    CHECK word present in dictionary
    IF present
        CHANGE word to corresponding value in dictionary
    ELSE
        Add key to the dictionary with a unique value
        CHANGE word to corresponding value in dictionary
    END LOOP
    PRINT encrypted and compressed text
    PRINT dictionary

Example:

Input text: `This is a sentence. This sentence is for example.`

Output text: `0 1 2 3 0 4 1 5 6`

Key: 

`{  

    "This":0,

    "is":1,

    "a":2,

    "sentence.":3,

    "sentence":4,

    "for":5,

    "example.":6

}`


For Decryption the algorithm will simply replace input ciphertext with its match in the key.

###### Pseudocode for decryption:

    INPUT text
    INPUT key
    LOOP each cipher word in input
        FIND corresponding match from key
        REPLACE cipher with corresponding value in key
    END LOOP
    PRINT decrypted output
