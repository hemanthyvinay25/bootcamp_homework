public class Demo {
    public static void main(String []args) {
       String str = "amit";
       int count = 0;
       System.out.println("String: "+str);
       for (int i = 0; i < str.length(); i++) {
          if (Character.isLetter(str.charAt(i)))
          count++;
       }
       System.out.println("Letters: "+count);
    }
 }