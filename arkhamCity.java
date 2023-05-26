import java.util.*;
import java.io.*;

class Main {
    public static void main(String[] args) {
       int result=findNumOfStepsRequired(3, 10) ;
       System.out.println(result);
    }
    public static int findNumOfStepsRequired(int patient, int steps) {
        return patient*steps;
    }
}