
import java.util.Scanner;//calls the Scanner class
import java.util.Random;//calls the random class


public class RunThis{

    public static void main(String[]args) {


        //creates an scanner object to read the system input
        Scanner kb = new Scanner(System.in);

        //asks if the vehicle is car or SUV
        System.out.print("Car or SUV:");
        //reads from the keyboard
        String vehicle = kb.next();

        double fuelusage = 0.0;

        //if the chosen vehicle was car, performs this operation
        if (vehicle.equalsIgnoreCase("car")) {

            //set the fuel usage to be 0.08 L/km
            //car ( in the city) - 0.08 (fuel amount being used)
            fuelusage = 0.08;


        }

        //if the chosen vehicle was SUV, performs this operation
        if (vehicle.equalsIgnoreCase("suv")) {

            //set the fuel usage to be 0.1 L/km
            //SUV (in the city) -  10 (fuel amount being used)
            fuelusage = 0.1;


        }

        double fuelUnitPrice = 1.15;


        String choice = "no";
        String trafficConsent = "no";


        while (choice.equalsIgnoreCase("no")) {
            System.out.println();

            //the users now choose different routes in between their origin and destination

            //In the real-time app, the
            //start and end location will be determined by the user through GUI. All GPS system calculates
            //the distance in between and using an API, the distance between the locations will be transferred
            // to our app


            System.out.println("Put the distance:");
            double distance=kb.nextDouble();



            //in real-time the GPS system will generate the number of intersections
            //and bus stops in the chosen route and using an API, the value will be transferred to our app


            System.out.println("No: of intersection:");
            int noOfIntersection = kb.nextInt();

            System.out.println("No: of bus stops:");
            int noOfBusStops = kb.nextInt();


            double totalfuelusage = 0.0;
            double totalEnergy=0.0;
            double totalcost = 0.0;
            double finalCost = 0.0;
            double co2emission=0.0;


            if (fuelusage == 0.08) {
                totalfuelusage = fuelusage * distance;

                totalcost = totalfuelusage * fuelUnitPrice;

                CarGasLossStat c = new CarGasLossStat();
                finalCost = totalcost + c.CarGasLosscalculator(noOfIntersection, noOfBusStops);//Cad

                totalEnergy=(finalCost/1.15)*10000;//watt-hr

                co2emission=2*finalCost;//kg

            }

            if (fuelusage == 0.11) {
                totalfuelusage = fuelusage * distance;

                totalcost = totalfuelusage * fuelUnitPrice;

                SUVGasLossStat s = new SUVGasLossStat();
                finalCost = totalcost + s.SUVGasLosscalculator(noOfIntersection, noOfBusStops);

                totalEnergy=(finalCost/1.15)*10000;

                co2emission=2*finalCost;

            }


            //all the three outputs are shown in the correct format
            System.out.printf("The total expenditure if you choose this route:%.3f CAD\n", finalCost);
            System.out.printf("The total energy usage if you choose this route:%.3f watt-hr\n", totalEnergy);
            System.out.printf("The total co2 emission if you choose this route:%.3f kg\n", co2emission);


            //asks if the user wants to choose this route or not. If not, our app will generate an alternate route for them to select
            System.out.println("Want to choose this route,yes or no:");
            choice = kb.next();



            //these are some loops to regenerate new routes based on the decisions made by the users
            if (choice.equalsIgnoreCase("yes")) {
                //we are generating the traffic index in that route randomly
                //in real-time the traffic condition in the area can be obtained from GPS systems like Google Maps
                Random rand=new Random();
                double trafficIndex = rand.nextInt(10) + 1;

                if (trafficIndex >= 6) {//if the traffic density index is more than or equal to 6
                    System.out.println("Be alert there is heavy traffic in this route.");

                    System.out.println("Still want to choose this route,yes or no:");
                    trafficConsent = kb.next();

                    if (trafficConsent.equalsIgnoreCase("yes")){
                        System.out.println("Congratulations,you have got your route.");
                        choice = "yes";}

                    if (trafficConsent.equalsIgnoreCase("no")){
                        choice = "no";}

                } else {
                    //whenever the user has chosen his/her favorite route, this message is shown to them
                    System.out.println("Congratulations,you have got your route.");
                    choice = "yes";
                }
            }


        }
    }
}














