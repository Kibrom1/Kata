package com.kata.tdd;

import java.util.ArrayList;
import java.util.List;

public class StringCalculator {
	@SuppressWarnings({ "unused", "unchecked" })
	private static int add(final String numbers, final String delimiter) {
	    int returnValue = 0;
	    String[] numbersArray = numbers.split(delimiter);
	    @SuppressWarnings("rawtypes")
		List negativeNumbers = new ArrayList<>();
	    for (String number : numbersArray) {
	        if (!number.trim().isEmpty()) {
	            int numberInt = Integer.parseInt(number.trim());
	            if (numberInt < 0) {
	                negativeNumbers.add(numberInt);
	            }
	            returnValue += numberInt;
	        }
	    }
	    if (negativeNumbers.size() > 0) {
	        throw new RuntimeException("Negatives not allowed: " + negativeNumbers.toString());
	    }
	    return returnValue;     
	}
}
